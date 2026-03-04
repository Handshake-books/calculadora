{
  "_comment": "Plantilla de proyecto para la Calculadora de proyecto editorial. Puedes guardar un proyecto con esta estructura y reimportarlo en el futuro.",
  "titulo": "Ej. Título del libro",
  "_comment_titulo": "Título del proyecto editorial (solo informativo).",
  "tirada_total": 600,
  "_comment_tirada": "Número total de ejemplares impresos.",
  "pvp": 25.0,
  "_comment_pvp": "Precio de venta al público con IVA incluido.",
  "iva_pct": 4,
  "_comment_iva": "Porcentaje de IVA aplicado al libro (normalmente 4% en España).",
  "costes": [
    {
      "concepto": "Impresión",
      "valor": 3000,
      "_comment": "Coste total en euros de este concepto de producción."
    },
    {
      "concepto": "Corrección",
      "valor": 500
    }
  ],
  "stock_fuera_venta": [
    {
      "concepto": "Archivo editorial",
      "valor": 10,
      "_comment": "Número de ejemplares que no estarán disponibles para venta."
    },
    {
      "concepto": "Archivo Autor/a",
      "valor": 10
    }
  ],
  "acuerdos_inversion": [
    {
      "actor": "Editorial",
      "porcentaje": 80,
      "_comment": "Porcentaje de la inversión total asumido por este actor."
    },
    {
      "actor": "Autor/a",
      "porcentaje": 20
    }
  ],
  "reparto_ingresos": [
    {
      "actor": "Editorial",
      "porcentaje": 80,
      "_comment": "Porcentaje de ingresos por venta asignado a este actor."
    },
    {
      "actor": "Autor/a",
      "porcentaje": 20
    }
  ]
}