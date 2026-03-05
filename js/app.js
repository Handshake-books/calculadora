

const euro=new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',minimumFractionDigits:2})
const number=new Intl.NumberFormat('es-ES')


// ------------------------------------------------------
// FUNCIÓN: formatEuro
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function formatEuro(v){return euro.format(v)}

// ------------------------------------------------------
// FUNCIÓN: formatUnits
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function formatUnits(v){return number.format(v)+" uds."}


// ------------------------------------------------------
// FUNCIÓN: addRow
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function addRow(container,label,value,unit){

let row=document.createElement("div")
row.className="input-row"

row.innerHTML=`
<input value="${label}">
<div class="input-unit">
<input type="number" class="calc" value="${value}">
<div class="unit">${unit}</div>
</div>
<button class="delete" onclick="this.parentNode.remove();calc()">✕</button>
`

document.getElementById(container).appendChild(row)
attach()
}


// ------------------------------------------------------
// FUNCIÓN: addCost
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function addCost(){addRow("costList","Nuevo concepto",0,"€")}

// ------------------------------------------------------
// FUNCIÓN: addStock
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function addStock(){addRow("stockList","Concepto",0,"uds.")}

// ------------------------------------------------------
// FUNCIÓN: addInvestor
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function addInvestor(){addRow("investList","Actor",0,"%")}

// ------------------------------------------------------
// FUNCIÓN: addIncome
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function addIncome(){addRow("incomeList","Actor",0,"%")}


// ------------------------------------------------------
// FUNCIÓN: sum
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function sum(container){
let t=0
document.querySelectorAll("#"+container+" input[type=number]").forEach(e=>{
t+=parseFloat(e.value)||0
})
return t
}


// ------------------------------------------------------
// FUNCIÓN: checkPercentages
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function checkPercentages(){

let inv=sum("investList")
let inc=sum("incomeList")

document.getElementById("invWarning").style.display = inv===100 ? "none":"block"
document.getElementById("incWarning").style.display = inc===100 ? "none":"block"
}


// ------------------------------------------------------
// FUNCIÓN: calc
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function calc(){

let inversion=sum("costList")
document.getElementById("total_inversion").innerText=formatEuro(inversion)

let pvp=parseFloat(document.getElementById("pvp").value)||0
document.getElementById("pvp_viabilidad").innerText=formatEuro(pvp)

let iva_pct=parseFloat(document.getElementById("iva_pct").value)||0

let base=pvp/(1+iva_pct/100)
let iva=pvp-base

document.getElementById("base_calc").innerText=formatEuro(base)
document.getElementById("iva_calc").innerText=formatEuro(iva)

let tirada=parseFloat(document.getElementById("tirada_total").value)||0
let stock=sum("stockList")
let venta=tirada-stock

document.getElementById("tirada_venta").innerText=formatUnits(venta)

let coste_unit = venta > 0 ? inversion / venta : 0
document.getElementById("coste_unitario").innerText=formatEuro(coste_unit)

let beneficio=base-coste_unit
document.getElementById("beneficio").innerText=formatEuro(beneficio)

let equilibrio = beneficio>0 ? Math.ceil(inversion/beneficio) : 0
document.getElementById("equilibrio").innerText=equilibrio+" uds. de "+venta+" uds."

let ratio=equilibrio/venta
document.getElementById("break_fill").style.width=(ratio*100)+"%"

document.getElementById("p3").innerText=formatEuro(coste_unit*3)
document.getElementById("p4").innerText=formatEuro(coste_unit*4)
document.getElementById("p5").innerText=formatEuro(coste_unit*5)

let ingresos=pvp*venta
let ingresos_sin_iva=base*venta
let iva_total=iva*venta
let beneficio_sin_iva=ingresos_sin_iva-inversion

document.getElementById("ingresos_total").innerText=formatEuro(ingresos)
document.getElementById("iva_total").innerText=formatEuro(iva_total)
document.getElementById("ingresos_sin_iva").innerText=formatEuro(ingresos_sin_iva)
document.getElementById("beneficio_sin_iva").innerText=formatEuro(beneficio_sin_iva)

checkPercentages()
updateActorCharts(inversion, ingresos_sin_iva)

}


// ------------------------------------------------------
// FUNCIÓN: updateActorCharts
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function updateActorCharts(inversion, ingresos){

let actors=[]

document.querySelectorAll("#incomeList .input-row").forEach((row,i)=>{

let name=row.children[0].value||"Actor"
let inc=row.children[1].querySelector("input").value/100||0

let inv_row=document.querySelectorAll("#investList .input-row")[i]

let inv=0
if(inv_row) inv=inv_row.children[1].querySelector("input").value/100||0

let inv_val=inversion*inv
let inc_val=ingresos*inc
let profit=inc_val-inv_val

actors.push({name,inv_val,inc_val,profit})

})

let max=Math.max(...actors.flatMap(a=>[a.inv_val,a.inc_val,a.profit]),1)

let html=""

actors.forEach(a=>{

let inv_pct=a.inv_val/max*100
let inc_pct=a.inc_val/max*100
let prof_pct=a.profit/max*100

html+=`
<div class="actor">

<div class="actor-name">${a.name}</div>

<div class="bar bar-invest" style="width:${inv_pct}%"></div>
<div class="bar-label">Inversión: ${formatEuro(Number(a.inv_val))}</div>


<div class="bar bar-income" style="width:${inc_pct}%"></div>
<div class="bar-label">Ingresos: ${formatEuro(Number(a.inc_val))}</div>

<div class="bar bar-profit" style="width:${prof_pct}%"></div>
<div class="bar-label">Beneficio: ${formatEuro(Number(a.profit))}</div>

</div>
`
})

document.getElementById("actorCharts").innerHTML=html
}


// ------------------------------------------------------
// FUNCIÓN: attach
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function attach(){
document.querySelectorAll(".calc").forEach(e=>{
e.removeEventListener("input",calc)
e.addEventListener("input",calc)
})
}

addRow("costList","Ej. Impresión",3000,"€")

addRow("stockList","Ej. Archivo editorial",10,"uds.")
addRow("stockList","Ej. Archivo Autor/a",10,"uds.")

addRow("investList","Editorial",80,"%")
addRow("investList","Autor/a",20,"%")

addRow("incomeList","Editorial",80,"%")
addRow("incomeList","Autor/a",20,"%")

attach()
calc()



// ==============================
// Compartir proyecto por URL
// ==============================


// ------------------------------------------------------
// FUNCIÓN: collectProjectData
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------

// ======================================================
// SISTEMA DE COMPARTIR PROYECTOS
// ------------------------------------------------------
// Este bloque permite generar enlaces con los datos del
// proyecto codificados en la URL.
//
// Ventajas:
// - No usa servidor
// - No guarda datos de usuarios
// - Funciona en GitHub Pages
//
// Cuando alguien abre un enlace con ?data=...
// la calculadora reconstruye el proyecto automáticamente.
// ======================================================

function collectProjectData(){

  const project = {
    titulo: document.querySelector("header input")?.value || "",
    tirada: parseFloat(document.getElementById("tirada_total")?.value) || 0,
pvp: parseFloat(document.getElementById("pvp")?.value) || 0,
iva: parseFloat(document.getElementById("iva_pct")?.value) || 0,
    costes: [],
    stock: [],
    inversion: [],
    ingresos: []
  };

  document.querySelectorAll("#costList .input-row").forEach(row=>{
    project.costes.push({
      concepto: row.children[0].value,
      valor: row.children[1].querySelector("input").value
    })
  })

  document.querySelectorAll("#stockList .input-row").forEach(row=>{
    project.stock.push({
      concepto: row.children[0].value,
      valor: row.children[1].querySelector("input").value
    })
  })

  document.querySelectorAll("#investList .input-row").forEach(row=>{
    project.inversion.push({
      actor: row.children[0].value,
      porcentaje: row.children[1].querySelector("input").value
    })
  })

  document.querySelectorAll("#incomeList .input-row").forEach(row=>{
    project.ingresos.push({
      actor: row.children[0].value,
      porcentaje: row.children[1].querySelector("input").value
    })
  })

  return project
}


// ------------------------------------------------------
// FUNCIÓN: shareProject
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function shareProject(){

  calc()

  const project = collectProjectData();

  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(project))))

  const url = window.location.origin + window.location.pathname + "?data=" + encoded

  navigator.clipboard.writeText(url)

  alert("Enlace del proyecto copiado al portapapeles")
}


// ------------------------------------------------------
// FUNCIÓN: loadProjectFromURL
// Esta función forma parte de la lógica principal
// Si la modificas revisa que no afecte a otras llamadas.
// ------------------------------------------------------
function loadProjectFromURL(){

  const params = new URLSearchParams(window.location.search)
  const data = params.get("data")

  if(!data) return

  try{

    const project = JSON.parse(decodeURIComponent(escape(atob(data))))

if(project.costes){
  document.getElementById("costList").innerHTML=""
  project.costes.forEach(c=>addRow("costList",c.concepto,c.valor,"€"))
}

if(project.stock){
  document.getElementById("stockList").innerHTML=""
  project.stock.forEach(s=>addRow("stockList",s.concepto,s.valor,"uds."))
}

if(project.inversion){
  document.getElementById("investList").innerHTML=""
  project.inversion.forEach(i=>addRow("investList",i.actor,i.porcentaje,"%"))
}

if(project.ingresos){
  document.getElementById("incomeList").innerHTML=""
  project.ingresos.forEach(i=>addRow("incomeList",i.actor,i.porcentaje,"%"))
}

if(project.tirada !== undefined)
document.getElementById("tirada_total").value = project.tirada

if(project.pvp !== undefined)
document.getElementById("pvp").value = project.pvp

if(project.iva !== undefined)
document.getElementById("iva_pct").value = project.iva

     
  }catch(e){
    console.warn("No se pudo cargar el proyecto desde la URL")
  }

  setTimeout(calc,50)
}

loadProjectFromURL();

