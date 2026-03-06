/**
 * Lógica de la Calculadora Editorial Premium
 * Handshake • 2026
 */

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const number = new Intl.NumberFormat('es-ES');

function formatEuro(v) { return euro.format(v); }
function formatUnits(v) { return number.format(v) + " uds."; }

/**
 * Añade filas dinámicas respetando los placeholders originales
 */
function addRow(container, label, value) {
    let div = document.createElement("div");
    div.className = "input-row";
    div.style = "display:grid; grid-template-columns: 1fr 80px 25px; gap:8px; margin-bottom:8px;";
    
    let placeholder = "Concepto...";
    if (container.includes("invest")) placeholder = "Socio/Inversor...";
    if (container.includes("income")) placeholder = "Socio/Autor...";
    if (container.includes("stock")) placeholder = "Destino...";

    div.innerHTML = `
        <input class="text-input" value="${label}" placeholder="${placeholder}" style="padding:8px; border-radius:6px; border:1px solid #e2e8f0; font-size:13px; outline:none;">
        <input type="number" class="calc" value="${value}" style="padding:8px; border-radius:6px; border:1px solid #e2e8f0; font-size:13px; font-weight:700; outline:none;">
        <button onclick="this.parentNode.remove();calc()" style="background:none; border:none; color:#cbd5e1; cursor:pointer; font-size:16px;">✕</button>
    `;
    document.getElementById(container).appendChild(div);
    attach();
}

function addCost() { addRow("costList", "", 0); }
function addStock() { addRow("stockList", "", 0); }
function addInvestor() { addRow("investList", "", 0); }
function addIncome() { addRow("incomeList", "", 0); }

/**
 * Función central de cálculos
 */
function calc() {
    // 1. Costes
    let totalInv = 0;
    document.querySelectorAll("#costList input[type=number]").forEach(i => totalInv += parseFloat(i.value) || 0);
    
    // 2. Precios e IVA
    let pvp = parseFloat(document.getElementById("pvp").value) || 0;
    let ivaPct = parseFloat(document.getElementById("iva_pct").value) || 0;
    let base = pvp / (1 + ivaPct/100);
    let cuotaIva = pvp - base;
    
    // 3. Tirada y Stock real
    let tirada = parseFloat(document.getElementById("tirada_total").value) || 0;
    let stockFuera = 0;
    document.querySelectorAll("#stockList input[type=number]").forEach(i => stockFuera += parseFloat(i.value) || 0);
    let vMax = Math.max(0, tirada - stockFuera);
    
    // 4. Métricas Clave
    let costeU = vMax > 0 ? totalInv / vMax : 0;
    let marginU = base - costeU;
    let eq = marginU > 0 ? Math.ceil(totalInv / marginU) : 0;

    // 5. Lógica del Slider
    const slider = document.getElementById("ventasSlider");
    if (slider.max != vMax) { 
        slider.max = vMax; 
        if (parseFloat(slider.value) > vMax) slider.value = vMax;
    }
    let vSim = parseFloat(slider.value);

    // --- RENDERIZADO EN PANTALLA ---

    // Columna 1
    document.getElementById("total_inversion").innerText = formatEuro(totalInv);
    document.getElementById("tirada_venta").innerText = formatUnits(vMax);
    document.getElementById("base_calc").innerText = formatEuro(base);
    document.getElementById("iva_calc").innerText = formatEuro(cuotaIva);
    
    // Fichas Resultados (Columna 3 superior)
    document.getElementById("coste_unitario").innerText = formatEuro(costeU);
    document.getElementById("beneficio").innerText = formatEuro(marginU);
    document.getElementById("equilibrio").innerText = formatUnits(eq);
    
    // Slider Visual
    let progressPct = vMax > 0 ? (vSim / vMax) * 100 : 0;
    let eqPosPct = vMax > 0 ? (eq / vMax) * 100 : 0;
    document.getElementById("break_fill").style.width = progressPct + "%";
    document.getElementById("break_fill").style.background = vSim < eq ? "var(--red)" : "var(--green)";
    
    const eqMark = document.getElementById("eq_mark");
    eqMark.style.left = eqPosPct + "%";
    eqMark.style.display = (eq > 0 && eq <= vMax) ? "block" : "none";

    // Grid del Simulador (con IVA acumulado)
    let totalNetoSim = base * vSim;
    document.getElementById("ventas_sim_val").innerText = formatUnits(vSim);
    document.getElementById("ingresos_total").innerText = formatEuro(pvp * vSim);
    document.getElementById("iva_total").innerText = formatEuro(cuotaIva * vSim);
    document.getElementById("ingresos_sin_iva").innerText = formatEuro(totalNetoSim);
    
    let balanceFinal = totalNetoSim - totalInv;
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

/**
 * Balance por Actores dinámico
 */
function updateActors(tInv, tNet) {
    let html = "";
    let names = new Set();
    document.querySelectorAll("#investList .text-input, #incomeList .text-input").forEach(i => {
        if (i.value.trim() !== "") names.add(i.value.trim());
    });
    
    names.forEach(name => {
        let pInv = 0, pInc = 0;
        document.querySelectorAll("#investList .input-row").forEach(r => {
            if (r.querySelector(".text-input").value.trim() === name) pInv += parseFloat(r.querySelectorAll("input")[1].value) || 0;
        });
        document.querySelectorAll("#incomeList .input-row").forEach(r => {
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
        c: Array.from(document.querySelectorAll("#costList .input-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        s: Array.from(document.querySelectorAll("#stockList .input-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inv: Array.from(document.querySelectorAll("#investList .input-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inc: Array.from(document.querySelectorAll("#incomeList .input-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        tir: document.getElementById("tirada_total").value, pvp: document.getElementById("pvp").value, iva: document.getElementById("iva_pct").value
    };
    const url = window.location.origin + window.location.pathname + "?p=" + btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles.");
}

function resetCalc() {
    if (confirm("¿Borrar todos los datos?")) window.location.href = window.location.pathname;
}

window.onload = () => {
    // Si la lista está vacía, cargar valores por defecto de la versión online
    if(!document.getElementById("costList").children.length) {
        addRow("costList", "Imprenta", 3000);
        addRow("stockList", "Autor/a", 20);
        addRow("investList", "Editorial", 100);
        addRow("incomeList", "Editorial", 90);
        addRow("incomeList", "Autoría", 10);
    }
    
    document.getElementById("ventasSlider").oninput = calc;
    calc();
    attach();
};