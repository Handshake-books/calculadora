/**
 * Lógica de la Calculadora Editorial Premium • Handshake 2026
 */

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const number = new Intl.NumberFormat('es-ES');

function formatEuro(v) { return euro.format(v); }
function formatUnits(v) { return number.format(v) + " uds."; }

function addRow(container, label, value) {
    let div = document.createElement("div");
    div.className = "dynamic-row";
    let placeholder = "Concepto...";
    let unit = "€";
    if (container.includes("stock")) { placeholder = "Destino..."; unit = "uds."; }
    else if (container.includes("invest")) { placeholder = "Inversor..."; unit = "%"; }
    else if (container.includes("income")) { placeholder = "Beneficiario..."; unit = "%"; }

    div.innerHTML = `
        <input class="text-input" value="${label}" placeholder="${placeholder}" style="padding:8px; border-radius:6px; border:1px solid #e2e8f0; font-size:13px; outline:none;">
        <div class="input-wrapper-list">
            <input type="number" class="calc" value="${value}">
            <span class="inline-unit">${unit}</span>
        </div>
        <button onclick="this.parentNode.remove();calc()" style="background:none; border:none; color:#cbd5e1; cursor:pointer; font-size:16px;">✕</button>
    `;
    document.getElementById(container).appendChild(div);
    attach();
}

function addCost() { addRow("costList", "", 0); }
function addStock() { addRow("stockList", "", 0); }
function addInvestor() { addRow("investList", "", 0); }
function addIncome() { addRow("incomeList", "", 0); }

function calc(event) {
    let totalInv = 0;
    document.querySelectorAll("#costList input[type=number]").forEach(i => totalInv += parseFloat(i.value) || 0);
    
    let pvp = parseFloat(document.getElementById("pvp").value) || 0;
    let ivaPct = parseFloat(document.getElementById("iva_pct").value) || 0;
    let base = pvp / (1 + ivaPct/100);
    let cuotaIva = pvp - base;
    
    let tirada = parseFloat(document.getElementById("tirada_total").value) || 0;
    let stockFuera = 0;
    document.querySelectorAll("#stockList input[type=number]").forEach(i => stockFuera += parseFloat(i.value) || 0);
    let vMax = Math.max(0, tirada - stockFuera);
    
    let costeU = vMax > 0 ? totalInv / vMax : 0;
    let marginU = base - costeU;
    
    // Unificación nomenclatura: Punto de equilibrio real
    let eq = base > 0 ? Math.ceil(totalInv / base) : 0;

    const slider = document.getElementById("ventasSlider");
    if (slider.max != vMax) { 
        slider.max = vMax; 
        if (!event || event.target.id !== "ventasSlider") slider.value = vMax;
    }
    let vSim = parseFloat(slider.value);

    // Actualización UI
    document.getElementById("total_inversion").innerText = formatEuro(totalInv);
    document.getElementById("tirada_venta").innerText = formatUnits(vMax);
    document.getElementById("base_calc").innerText = formatEuro(base);
    document.getElementById("iva_calc").innerText = formatEuro(cuotaIva);
    
    document.getElementById("resumen_pvp").innerText = formatEuro(pvp);
    document.getElementById("coste_unitario").innerText = formatEuro(costeU);
    document.getElementById("beneficio").innerText = formatEuro(marginU);
    document.getElementById("equilibrio").innerText = formatUnits(eq);
    
    // Lógica visual del slider
    let progressPct = vMax > 0 ? (vSim / vMax) * 100 : 0;
    let eqPosPct = vMax > 0 ? (eq / vMax) * 100 : 0;
    
    document.getElementById("break_fill").style.width = progressPct + "%";
    
    // Balance neto simulado
    let totalNetoSim = base * vSim;
    let balanceFinal = totalNetoSim - totalInv;
    
    // Color dinámico: Cambia exactamente al superar el punto de equilibrio
    document.getElementById("break_fill").style.background = balanceFinal < 0 ? "rgba(239, 68, 68, 0.4)" : "rgba(16, 185, 129, 0.4)";
    document.getElementById("eq_mark").style.left = eqPosPct + "%";
    document.getElementById("eq_mark").style.display = (eq > 0 && eq <= vMax) ? "block" : "none";

    // Resultados Simulador
    document.getElementById("ventas_sim_val").innerText = formatUnits(vSim);
    document.getElementById("ingresos_total").innerText = formatEuro(pvp * vSim);
    document.getElementById("iva_total").innerText = formatEuro(cuotaIva * vSim);
    document.getElementById("ingresos_sin_iva").innerText = formatEuro(totalNetoSim);
    
    const resFinalLabel = document.getElementById("beneficio_sin_iva");
    resFinalLabel.innerText = formatEuro(balanceFinal);
    resFinalLabel.style.color = balanceFinal >= 0 ? "var(--green)" : "var(--red)";

    // Precios Sugeridos
    document.getElementById("p3").innerText = formatEuro(costeU * 3);
    document.getElementById("p4").innerText = formatEuro(costeU * 4);
    document.getElementById("p5").innerText = formatEuro(costeU * 5);

    updateActors(totalInv, totalNetoSim);
    checkWarnings();
}

function updateActors(tInv, tNet) {
    let html = "";
    let names = new Set();
    document.querySelectorAll("#investList .text-input, #incomeList .text-input").forEach(i => {
        if (i.value.trim() !== "") names.add(i.value.trim());
    });
    
    names.forEach(name => {
        let pInv = 0, pInc = 0;
        document.querySelectorAll("#investList .dynamic-row").forEach(r => {
            if (r.querySelector(".text-input").value.trim() === name) pInv += parseFloat(r.querySelectorAll("input")[1].value) || 0;
        });
        document.querySelectorAll("#incomeList .dynamic-row").forEach(r => {
            if (r.querySelector(".text-input").value.trim() === name) pInc += parseFloat(r.querySelectorAll("input")[1].value) || 0;
        });
        
        let invertido = tInv * (pInv / 100);
        let recibido = tNet * (pInc / 100);
        let balance = recibido - invertido;
        let color = balance >= 0 ? 'var(--green)' : 'var(--red)';

        html += `
            <div class="actor-card">
                <div class="a-head"><span>${name}</span><span class="a-badge" style="background:${color}">${balance >= 0 ? 'RECUPERADO' : 'RIESGO'}</span></div>
                <div class="a-row"><span>Inversión:</span> <b>${formatEuro(invertido)}</b></div>
                <div class="a-row"><span>Ingresos:</span> <b>${formatEuro(recibido)}</b></div>
                <div class="a-total"><span>Balance:</span> <span style="color:${color}">${formatEuro(balance)}</span></div>
            </div>`;
    });
    document.getElementById("actorCharts").innerHTML = html;
}

function checkWarnings() {
    let s1 = 0; document.querySelectorAll("#investList .calc").forEach(i => s1 += parseFloat(i.value) || 0);
    document.getElementById("invWarning").style.display = (s1 === 100 || s1 === 0) ? "none" : "block";
    let s2 = 0; document.querySelectorAll("#incomeList .calc").forEach(i => s2 += parseFloat(i.value) || 0);
    document.getElementById("incWarning").style.display = (s2 === 100 || s2 === 0) ? "none" : "block";
}

function attach() {
    document.querySelectorAll(".calc, input[type=number], .text-input").forEach(el => el.oninput = calc);
}

function shareProject() {
    const data = {
        t: document.getElementById("titulo_proyecto").value,
        c: Array.from(document.querySelectorAll("#costList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        s: Array.from(document.querySelectorAll("#stockList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inv: Array.from(document.querySelectorAll("#investList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inc: Array.from(document.querySelectorAll("#incomeList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        tir: document.getElementById("tirada_total").value, pvp: document.getElementById("pvp").value, iva: document.getElementById("iva_pct").value
    };
    const json = JSON.stringify(data);
    const base64 = btoa(unescape(encodeURIComponent(json)));
    const url = window.location.origin + window.location.pathname + "?p=" + base64;
    navigator.clipboard.writeText(url);
    alert("Enlace de proyecto copiado.");
}

function loadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (!p) return false;
    try {
        const json = decodeURIComponent(escape(atob(p)));
        const data = JSON.parse(json);
        document.getElementById("titulo_proyecto").value = data.t || "";
        document.getElementById("tirada_total").value = data.tir;
        document.getElementById("pvp").value = data.pvp;
        document.getElementById("iva_pct").value = data.iva;
        document.getElementById("costList").innerHTML = "";
        data.c.forEach(x => addRow("costList", x[0], x[1]));
        document.getElementById("stockList").innerHTML = "";
        data.s.forEach(x => addRow("stockList", x[0], x[1]));
        document.getElementById("investList").innerHTML = "";
        data.inv.forEach(x => addRow("investList", x[0], x[1]));
        document.getElementById("incomeList").innerHTML = "";
        data.inc.forEach(x => addRow("incomeList", x[0], x[1]));
        return true;
    } catch(e) { return false; }
}

function resetCalc() {
    if (confirm("¿Borrar todos los datos?")) window.location.href = window.location.pathname;
}

window.onload = () => {
    const loaded = loadFromUrl();
    if(!loaded) {
        addRow("costList", "Imprenta", 3000);
        addRow("stockList", "Archivo autor/a", 20);
        addRow("investList", "Editorial", 100);
        addRow("incomeList", "Editorial", 80);
        addRow("incomeList", "Autor/a", 20);
    }
    document.getElementById("ventasSlider").oninput = calc;
    calc(null);
    attach();
};