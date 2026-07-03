/**
 * Lógica de la Calculadora Editorial Premium • Handshake 2026
 */

const I18N = {
    es: {
        pageTitle: "Calculadora Editorial • Handshake",
        credit: 'Una herramienta libre de <a href="https://www.handshake.fun" target="_blank">Handshake</a> desarrollada por Jaime Sebastián • 2026',
        titlePlaceholder: "Nombre del proyecto...",
        subtitle: "¿No sabes qué precio ponerle a tu publicación? ¿Quieres publicar pero no arruinarte en el intento? Con esta herramienta podrás hacer un cálculo de presupuesto. Toca los números, añade tus costes y descubre si tu próxima publicación es viable.",
        col1: "1. Producción y Precio",
        col2: "2. Negociación",
        col3: "3. Resultados",
        costsTitle: "Costes de producción",
        costsHelper: "Incluye aquí todo lo que hace que tu libro sea real: desde el papel y la impresión hasta el packaging de los envíos o la corrección de textos.",
        addConcept: "+ añadir concepto",
        totalInvestment: "Inversión inicial total",
        stockTitle: "Tirada vs. Stock",
        stockHelper: "Define cuántos libros se imprimen y quedan fuera de venta.",
        printRunUnit: "Tirada total",
        stockBoxHelper: '<b>Stock fuera de venta:</b> No todos los libros se venden. Reserva ejemplares para usar de muestra, depósito legal o para tu propia estantería.',
        addStock: "+ añadir stock fuera de venta",
        actualStock: "Stock real a la venta",
        priceTitle: "Precio de venta",
        pvpUnit: "€ PVP",
        baseLabel: "Base (Neto)",
        ivaLabel: "IVA",
        ivaAmountLabel: "Cuota IVA",
        priceQuestion: "¿Qué precio le pongo?",
        priceHelper: "Estas son referencias habituales del mercado, se multiplica el coste unitario para asegurar márgenes saludables. Elige la que mejor encaje con tu lector.",
        investTitle: "Inversión",
        investHelper: "¿Quién pone el dinero? Puede ser la editorial, un co-editor, una beca o incluso un crowdfunding.",
        addInvestor: "+ añadir inversor",
        investWarning: "⚠️ La inversión debe sumar 100%",
        incomeTitle: "Reparto de ingresos",
        incomeHelper: "Define cómo se reparte el pastel de las ventas netas. ¿Qué porcentaje se lleva el autor/a tras recuperar la inversión?",
        addBeneficiary: "+ añadir beneficiario",
        incomeWarning: "⚠️ El reparto debe sumar 100%",
        profitSplitTitle: "Reparto de beneficios",
        pvpLabel: "P.V.P.",
        pvpHelperMini: "Precio de venta al público (IVA inc).",
        costPerUnitLabel: "Coste / ud.",
        costPerUnitHelperMini: "= Inversión inicial / Stock a la venta.",
        marginLabel: "Margen medio / ud.",
        marginHelperMini: "Beneficio por ejemplar vendido. Varía según el coste/ud. y el descuento que apliques a cada canal.",
        breakEvenLabel: "Punto de equilibrio",
        breakEvenHelperMini: "Esta es tu 'cifra mágica'. A partir de aquí, el proyecto deja de ser una inversión y empieza a generar beneficios.",
        thirdPartyQuestion: "¿Vas a vender a través de terceros?",
        thirdPartyHelperMini: "Si vas a vender a través de otros canales, activa esta opción para ver cómo afectan las comisiones a tu beneficio real.",
        yes: "SÍ",
        channelsHelper: "Reparte tu stock en distintos canales de venta, ajusta el descuento de cada canal y consigue una proyección más realista.",
        directSales: "Ventas Directas (Sin descuento)",
        channelHeader: "Canal de venta",
        discountHeader: "% Dto.",
        salesHeader: "Ventas (uds.)",
        addChannel: "+ añadir canal con dto.",
        simulatorTitle: "Simulador de ventas",
        simulatorHelper: "Juega con el marcador azul: ¿qué pasa si solo vendes la mitad? ¿Y si agotas la edición?",
        breakEvenMark: "PUNTO DE EQUILIBRIO",
        zeroSales: "0 ventas",
        soldOut: "Agotado",
        simulatedSales: "Ventas simuladas",
        grossTotal: "Total Bruto",
        accumulatedVat: "IVA Acumulado",
        netBase: "Base Neta",
        finalResult: "Resultado Final",
        finalHelper: "Esta es la proyección de beneficios. Tómalo como una guía, ¡la realidad editorial siempre tiene sus giros de guion!",
        shareBtn: "🔗 Guardar y Compartir",
        pdfBtn: "📄 Generar informe de viabilidad",
        resetBtn: "🔄 Empezar de cero",
        conceptPlaceholder: "Concepto...",
        destinationPlaceholder: "Destino...",
        investorPlaceholder: "Inversor...",
        beneficiaryPlaceholder: "Beneficiario...",
        channelPlaceholder: "Canal...",
        directSalesLive: (pct) => `● Venta directa (${pct}%)`,
        discountChannelsLive: (pct) => `● Canales con descuento (${pct}%)`,
        directSalesTooltip: (u, pct) => `Ventas Directas: ${u} uds. (${pct}%)`,
        channelTooltip: (n, u, pct) => `${n}: ${u} uds. (${pct}%)`,
        recovered: "RECUPERADO",
        atRisk: "RIESGO",
        investmentColon: "Inversión:",
        incomeColon: "Ingresos:",
        balanceColon: "Balance:",
        linkCopied: "Enlace de proyecto copiado.",
        interactiveVersion: "Versión interactiva del proyecto",
        confirmReset: "¿Borrar todos los datos?",
        seedPrinter: "Ej. Imprenta",
        seedPublisher: "Editorial",
        seedAuthor: "Autor/a",
        unitsSuffix: " uds.",
        distributor: "Distribuidora",
        bookstores: "Librerías",
        locale: "es-ES"
    },
    en: {
        pageTitle: "Publishing Calculator • Handshake",
        credit: 'A free tool by <a href="https://www.handshake.fun" target="_blank">Handshake</a>, built by Jaime Sebastián • 2026',
        titlePlaceholder: "Project name...",
        subtitle: "Not sure what price to set for your publication? Want to publish without going broke? This tool helps you put together a budget estimate. Tap the numbers, add your costs, and find out if your next publication is viable.",
        col1: "1. Production & Pricing",
        col2: "2. Negotiation",
        col3: "3. Results",
        costsTitle: "Production costs",
        costsHelper: "Include everything that makes your book real: from paper and printing to shipping packaging or proofreading.",
        addConcept: "+ add item",
        totalInvestment: "Total initial investment",
        stockTitle: "Print run vs. Stock",
        stockHelper: "Define how many books are printed and set aside from sale.",
        printRunUnit: "Total print run",
        stockBoxHelper: '<b>Stock not for sale:</b> Not every book gets sold. Set aside copies for review samples, legal deposit, or your own shelf.',
        addStock: "+ add stock not for sale",
        actualStock: "Actual stock for sale",
        priceTitle: "Sale price",
        pvpUnit: "€ RRP",
        baseLabel: "Base (Net)",
        ivaLabel: "VAT",
        ivaAmountLabel: "VAT amount",
        priceQuestion: "What price should I set?",
        priceHelper: "These are common market references, multiplying the unit cost to ensure healthy margins. Pick the one that best fits your readers.",
        investTitle: "Investment",
        investHelper: "Who puts up the money? It could be the publisher, a co-publisher, a grant, or even crowdfunding.",
        addInvestor: "+ add investor",
        investWarning: "⚠️ Investment must add up to 100%",
        incomeTitle: "Revenue split",
        incomeHelper: "Define how the net sales pie is split. What percentage does the author take after the investment is recovered?",
        addBeneficiary: "+ add beneficiary",
        incomeWarning: "⚠️ Split must add up to 100%",
        profitSplitTitle: "Profit distribution",
        pvpLabel: "RRP",
        pvpHelperMini: "Retail price (VAT incl.).",
        costPerUnitLabel: "Cost / unit",
        costPerUnitHelperMini: "= Initial investment / stock for sale.",
        marginLabel: "Average margin / unit",
        marginHelperMini: "Profit per copy sold. Varies depending on unit cost and the discount applied to each channel.",
        breakEvenLabel: "Break-even point",
        breakEvenHelperMini: "This is your 'magic number'. From here on, the project stops being an investment and starts generating profit.",
        thirdPartyQuestion: "Selling through third parties?",
        thirdPartyHelperMini: "If you're going to sell through other channels, turn this on to see how commissions affect your real profit.",
        yes: "YES",
        channelsHelper: "Split your stock across different sales channels, adjust each channel's discount, and get a more realistic projection.",
        directSales: "Direct sales (No discount)",
        channelHeader: "Sales channel",
        discountHeader: "% Disc.",
        salesHeader: "Sales (units)",
        addChannel: "+ add channel w/ discount",
        simulatorTitle: "Sales simulator",
        simulatorHelper: "Play with the blue marker: what happens if you only sell half? What if you sell out the whole run?",
        breakEvenMark: "BREAK-EVEN POINT",
        zeroSales: "0 sales",
        soldOut: "Sold out",
        simulatedSales: "Simulated sales",
        grossTotal: "Gross total",
        accumulatedVat: "Accumulated VAT",
        netBase: "Net base",
        finalResult: "Final result",
        finalHelper: "This is the profit projection. Take it as a guide — publishing reality always has its plot twists!",
        shareBtn: "🔗 Save & Share",
        pdfBtn: "📄 Generate feasibility report",
        resetBtn: "🔄 Start over",
        conceptPlaceholder: "Item...",
        destinationPlaceholder: "Destination...",
        investorPlaceholder: "Investor...",
        beneficiaryPlaceholder: "Beneficiary...",
        channelPlaceholder: "Channel...",
        directSalesLive: (pct) => `● Direct sales (${pct}%)`,
        discountChannelsLive: (pct) => `● Discounted channels (${pct}%)`,
        directSalesTooltip: (u, pct) => `Direct sales: ${u} units (${pct}%)`,
        channelTooltip: (n, u, pct) => `${n}: ${u} units (${pct}%)`,
        recovered: "RECOVERED",
        atRisk: "AT RISK",
        investmentColon: "Investment:",
        incomeColon: "Income:",
        balanceColon: "Balance:",
        linkCopied: "Project link copied.",
        interactiveVersion: "Interactive version of the project",
        confirmReset: "Delete all data?",
        seedPrinter: "E.g. Printer",
        seedPublisher: "Publisher",
        seedAuthor: "Author",
        unitsSuffix: " units",
        distributor: "Distributor",
        bookstores: "Bookstores",
        locale: "en-GB"
    }
};

let currentLang = localStorage.getItem("calc_lang") || "es";
function t(key) { return I18N[currentLang][key]; }

function getEuroFormatter() { return new Intl.NumberFormat(t("locale"), { style: 'currency', currency: 'EUR' }); }
function getNumberFormatter() { return new Intl.NumberFormat(t("locale")); }

function formatEuro(v) { return getEuroFormatter().format(v); }
function formatUnits(v) { return getNumberFormatter().format(v) + t("unitsSuffix"); }

function applyStaticTranslations() {
    document.title = t("pageTitle");
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

// Actualiza los placeholders de las filas dinámicas ya creadas (no toca los valores introducidos por el usuario)
function refreshDynamicPlaceholders() {
    const map = {
        costList: "conceptPlaceholder",
        stockList: "destinationPlaceholder",
        investList: "investorPlaceholder",
        incomeList: "beneficiaryPlaceholder"
    };
    Object.keys(map).forEach(containerId => {
        document.querySelectorAll(`#${containerId} .text-input`).forEach(input => {
            input.placeholder = t(map[containerId]);
        });
    });
    document.querySelectorAll("#stockList .inline-unit").forEach(span => {
        span.textContent = t("unitsSuffix").trim();
    });
    document.querySelectorAll("#channelList .chan-name").forEach(input => {
        input.placeholder = t("channelPlaceholder");
    });
}

function setLanguage(lang) {
    const oldLang = currentLang;
    currentLang = lang;
    localStorage.setItem("calc_lang", lang);
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    applyStaticTranslations();
    refreshDynamicPlaceholders();
    refreshSeedValues(oldLang, lang);
    calc(null);
}

function addRow(container, label, value, seedKey) {
    let div = document.createElement("div");
    div.className = "dynamic-row";
    let placeholder = t("conceptPlaceholder");
    let unit = "€";
    if (container.includes("stock")) { placeholder = t("destinationPlaceholder"); unit = t("unitsSuffix").trim(); }
    else if (container.includes("invest")) { placeholder = t("investorPlaceholder"); unit = "%"; }
    else if (container.includes("income")) { placeholder = t("beneficiaryPlaceholder"); unit = "%"; }

    div.innerHTML = `
        <input class="text-input" value="${label}" placeholder="${placeholder}" style="padding:8px; border-radius:4px; border:1px solid rgba(0,0,0,0.08); font-size:13px; outline:none;">
        <div class="input-wrapper-list">
            <input type="number" class="calc" value="${value}">
            <span class="inline-unit">${unit}</span>
        </div>
        <button onclick="this.parentNode.remove();calc()" style="background:none; border:none; color:rgba(0,0,0,0.35); cursor:pointer; font-size:16px;">✕</button>
    `;
    if (seedKey) div.querySelector(".text-input").dataset.seedKey = seedKey;
    document.getElementById(container).appendChild(div);
    attach();
}

// Vuelve a traducir el VALOR (no solo el placeholder) de las filas de ejemplo iniciales,
// pero solo si el usuario no las ha editado todavía (el valor sigue siendo el texto de ejemplo)
function refreshSeedValues(oldLang, newLang) {
    document.querySelectorAll("[data-seed-key]").forEach(input => {
        const key = input.dataset.seedKey;
        if (input.value === I18N[oldLang][key]) input.value = I18N[newLang][key];
    });
}

function addCost() { addRow("costList", "", 0); }
function addStock() { addRow("stockList", "", 0); }
function addInvestor() { addRow("investList", "", 0); }
function addIncome() { addRow("incomeList", "", 0); }

function addChannel(name = "", discount = 0, units = 0) {
    let div = document.createElement("div");
    div.className = "channel-row";
    div.innerHTML = `
        <input class="text-input chan-name" value="${name}" placeholder="${t("channelPlaceholder")}" oninput="calc()" style="text-align: left !important;">
        <input type="number" class="chan-disc" value="${discount}" oninput="calc()">
        <input type="number" class="chan-uds" value="${units}" oninput="calc()">
        <button onclick="this.parentNode.remove();calc()" style="background:none; border:none; color:rgba(0,0,0,0.35); cursor:pointer;">✕</button>
    `;
    document.getElementById("channelList").appendChild(div);
    calc();
}

function togglePro() {
    const isPro = document.getElementById("modoPro").checked;
    document.getElementById("proContent").style.display = isPro ? "block" : "none";

    const list = document.getElementById("channelList");
    if (isPro && list.children.length === 0) {
        let tirada = parseFloat(document.getElementById("tirada_total").value) || 0;
        let stockFuera = 0;
        document.querySelectorAll("#stockList input[type=number]").forEach(i => stockFuera += parseFloat(i.value) || 0);
        let vMax = Math.max(0, tirada - stockFuera);

        addChannel("Wholesale", 40, Math.round(vMax * 0.30));
        addChannel(t("distributor"), 60, Math.round(vMax * 0.10));
        addChannel(t("bookstores"), 35, Math.round(vMax * 0.10));
    }
    calc();
}

function calc(event) {
    let totalInv = 0;
    document.querySelectorAll("#costList input[type=number]").forEach(i => totalInv += parseFloat(i.value) || 0);

    let pvp = parseFloat(document.getElementById("pvp").value) || 0;
    let ivaPct = parseFloat(document.getElementById("iva_pct").value) || 0;

    let baseOriginal = pvp / (1 + ivaPct/100);
    let cuotaIva = pvp - baseOriginal;

    let tirada = parseFloat(document.getElementById("tirada_total").value) || 0;
    let stockFuera = 0;
    document.querySelectorAll("#stockList input[type=number]").forEach(i => stockFuera += parseFloat(i.value) || 0);
    let vMax = Math.max(0, tirada - stockFuera);

    let costeU = vMax > 0 ? totalInv / vMax : 0;

    let base = baseOriginal;
    let ingresoTotalProyectado = 0;
    let udsAsignadasSecundarias = 0;
    const isPro = document.getElementById("modoPro").checked;

    if (isPro) {
        const distBar = document.getElementById("distBar");
        distBar.innerHTML = '';
        const colors = ["#f59e0b", "#10b981", "#8b5cf6", "#ec4899", "#06b6d4"];

        document.querySelectorAll(".channel-row").forEach((row, index) => {
            let n = row.querySelector(".chan-name").value || "Canal";
            let d = parseFloat(row.querySelector(".chan-disc").value) || 0;
            let u = parseFloat(row.querySelector(".chan-uds").value) || 0;
            udsAsignadasSecundarias += u;
            ingresoTotalProyectado += (baseOriginal * (1 - d/100) * u);

            let pct = (vMax > 0 ? (u / vMax) * 100 : 0);
            let segment = document.createElement("div");
            segment.className = "bar-segment";
            segment.style.width = pct + "%";
            segment.style.backgroundColor = colors[index % colors.length];
            segment.title = t("channelTooltip")(n, u, Math.round(pct));
            distBar.appendChild(segment);
        });

        let udsPrincipal = Math.max(0, vMax - udsAsignadasSecundarias);
        document.getElementById("unidades_principal").innerText = formatUnits(udsPrincipal);
        ingresoTotalProyectado += (baseOriginal * udsPrincipal);

        let pctPrincipal = (vMax > 0 ? (udsPrincipal / vMax) * 100 : 0);
        let mainSegment = document.createElement("div");
        mainSegment.className = "bar-segment";
        mainSegment.style.width = pctPrincipal + "%";
        mainSegment.style.backgroundColor = "var(--blue)";
        mainSegment.title = t("directSalesTooltip")(udsPrincipal, Math.round(pctPrincipal));
        distBar.prepend(mainSegment);

        document.getElementById("label_principal").innerText = t("directSalesLive")(Math.round(pctPrincipal));
        document.getElementById("label_otros").innerText = t("discountChannelsLive")(Math.round((udsAsignadasSecundarias/vMax)*100));

        base = vMax > 0 ? (ingresoTotalProyectado / vMax) : baseOriginal;
    }

    let marginU = base - costeU;
    let eq = base > 0 ? Math.ceil(totalInv / base) : 0;

    const slider = document.getElementById("ventasSlider");
    if (slider.max != vMax) {
        slider.max = vMax;
        if (!event || event.target.id !== "ventasSlider") slider.value = vMax;
    }
    let vSim = parseFloat(slider.value);

    document.getElementById("total_inversion").innerText = formatEuro(totalInv);
    document.getElementById("tirada_venta").innerText = formatUnits(vMax);
    document.getElementById("base_calc").innerText = formatEuro(baseOriginal);
    document.getElementById("iva_calc").innerText = formatEuro(cuotaIva);
    document.getElementById("resumen_pvp").innerText = formatEuro(pvp);
    document.getElementById("coste_unitario").innerText = formatEuro(costeU);
    document.getElementById("beneficio").innerText = formatEuro(marginU);
    document.getElementById("equilibrio").innerText = formatUnits(eq);

    let progressPct = vMax > 0 ? (vSim / vMax) * 100 : 0;
    let eqPosPct = vMax > 0 ? (eq / vMax) * 100 : 0;
    let gradientPos = Math.min(eqPosPct, 100);

    let trackPoints = [...new Set([0, gradientPos, progressPct, 100].map(p => Math.max(0, Math.min(100, p))))].sort((a, b) => a - b);
    let trackStops = [];
    for (let i = 0; i < trackPoints.length - 1; i++) {
        const mid = (trackPoints[i] + trackPoints[i + 1]) / 2;
        const rgb = mid < gradientPos ? '214, 31, 31' : '0, 0, 255';
        const alpha = mid < progressPct ? 1 : 0.5;
        const color = `rgba(${rgb}, ${alpha})`;
        trackStops.push(`${color} ${trackPoints[i]}%`, `${color} ${trackPoints[i + 1]}%`);
    }
    document.getElementById("range_track_bg").style.background = `linear-gradient(to right, ${trackStops.join(', ')})`;
    document.getElementById("break_fill").style.width = progressPct + "%";
    document.getElementById("break_fill").style.background = "rgba(0, 0, 0, 0.08)";
    document.getElementById("eq_mark").style.left = eqPosPct + "%";
    document.getElementById("eq_mark").style.display = (eq > 0 && eq <= vMax) ? "block" : "none";

    let totalNetoSim = base * vSim;
    let balanceFinal = totalNetoSim - totalInv;

    document.getElementById("ventas_sim_val").innerText = formatUnits(vSim);
    document.getElementById("ingresos_total").innerText = formatEuro(pvp * vSim);
    document.getElementById("iva_total").innerText = formatEuro(cuotaIva * vSim);
    document.getElementById("ingresos_sin_iva").innerText = formatEuro(totalNetoSim);

    const resFinalLabel = document.getElementById("beneficio_sin_iva");
    resFinalLabel.innerText = formatEuro(balanceFinal);
    resFinalLabel.style.color = balanceFinal >= 0 ? "var(--green)" : "var(--red)";

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
                <div class="a-head"><span>${name}</span><span class="a-badge" style="color:${color}">${balance >= 0 ? t("recovered") : t("atRisk")}</span></div>
                <div class="a-row"><span>${t("investmentColon")}</span> <b>${formatEuro(invertido)}</b></div>
                <div class="a-row"><span>${t("incomeColon")}</span> <b>${formatEuro(recibido)}</b></div>
                <div class="a-total"><span>${t("balanceColon")}</span> <span style="color:${color}">${formatEuro(balance)}</span></div>
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

// INICIO AÑADIDO: Lógica unificada para generar URL
function getShareUrl() {
    let canalesGuardados = [];
    document.querySelectorAll(".channel-row").forEach(r => {
        canalesGuardados.push([
            r.querySelector(".chan-name").value,
            r.querySelector(".chan-disc").value,
            r.querySelector(".chan-uds").value
        ]);
    });

    const data = {
        t: document.getElementById("titulo_proyecto").value,
        c: Array.from(document.querySelectorAll("#costList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        s: Array.from(document.querySelectorAll("#stockList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inv: Array.from(document.querySelectorAll("#investList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        inc: Array.from(document.querySelectorAll("#incomeList .dynamic-row")).map(r => [r.querySelector(".text-input").value, r.querySelectorAll("input")[1].value]),
        tir: document.getElementById("tirada_total").value,
        pvp: document.getElementById("pvp").value,
        iva: document.getElementById("iva_pct").value,
        pro: document.getElementById("modoPro").checked,
        ch: canalesGuardados,
        lang: currentLang
    };
    const json = JSON.stringify(data);
    const base64 = btoa(unescape(encodeURIComponent(json)));
    return window.location.origin + window.location.pathname + "?p=" + base64;
}

function shareProject() {
    navigator.clipboard.writeText(getShareUrl());
    alert(t("linkCopied"));
}

// NUEVA FUNCIÓN PDF Y QR
function exportPDF() {
    const url = getShareUrl();

    // Limpiamos si hubiera uno anterior
    let qrSection = document.getElementById("pdf-qr-section");
    if (qrSection) qrSection.remove();

    qrSection = document.createElement("div");
    qrSection.id = "pdf-qr-section";
    qrSection.innerHTML = `
        <p style="font-size: 11px; font-weight: 800; color: rgba(0,0,0,0.55); margin-bottom: 10px; text-transform: uppercase;">${t("interactiveVersion")}</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(url)}" style="width: 100px; height: 100px; margin-bottom: 8px; border-radius: 4px;" />
        <br>
        <a href="${url}" style="font-size: 9px; color: #0000ff; text-decoration: none; word-wrap: break-word; max-width: 80%; display: inline-block;">${url}</a>
    `;

    // Añadirlo al final del layout para que el CSS de impresión lo ponga abajo
    document.querySelector(".layout").appendChild(qrSection);

    window.print();

    // Lo borramos después de invocar la pantalla de impresión
    setTimeout(() => {
        if(document.getElementById("pdf-qr-section")) {
            document.getElementById("pdf-qr-section").remove();
        }
    }, 1000);
}
// FIN AÑADIDO

function loadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    if (!p) return false;
    try {
        const json = decodeURIComponent(escape(atob(p)));
        const data = JSON.parse(json);
        if (data.lang && I18N[data.lang]) currentLang = data.lang;
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

        if (data.pro) {
            document.getElementById("modoPro").checked = true;
            document.getElementById("proContent").style.display = "block";
            document.getElementById("channelList").innerHTML = "";
            if (data.ch && data.ch.length > 0) {
                data.ch.forEach(x => addChannel(x[0], x[1], x[2]));
            }
        }
        return true;
    } catch(e) { return false; }
}

function resetCalc() {
    if (confirm(t("confirmReset"))) window.location.href = window.location.pathname;
}

window.onload = () => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    // loadFromUrl() puede actualizar currentLang (proyecto compartido en otro idioma) antes de crear las filas
    const loaded = loadFromUrl();
    if (!loaded) {
        addRow("costList", t("seedPrinter"), 3000, "seedPrinter");
        addRow("investList", t("seedPublisher"), 100, "seedPublisher");
        addRow("incomeList", t("seedPublisher"), 80, "seedPublisher");
        addRow("incomeList", t("seedAuthor"), 20, "seedAuthor");
    }

    document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === currentLang));
    applyStaticTranslations();
    refreshDynamicPlaceholders();

    document.getElementById("ventasSlider").oninput = calc;
    calc(null);
    attach();
};
