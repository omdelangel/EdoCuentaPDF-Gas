module.exports = {
    content: [
        {image: "images/logo-cambia-250px.jpg", alignment:"center"},
        {text: "\n\nEstado de cuenta\n\n", style: "header", alignment: "center"}   ,         
 
        {columns: [
            {
                table: {
                    header: 0,
                    body: [
                        [{
                            style: 'tableExample',
                            table: {
                                headerRows: 0,
                                body: [
                                    [{text: "Cambia y Gana\n\n", style: "header"},],
                                    [{text: "Domicilio de las oficinas generales", style: "subheader"},],
                                    [{text: "R.F.C CONV34234242423 \n\n", style: "subheader"},],
                                ]
                            },
                            layout: 'noBorders',
                        }],
                        [
                            {                
                                style: 'tableExample',
                                table: {
                                    headerRows: 0,
                                    body: [
                                        [{text: "RENE FRANCISCO GONZALEZ PRIETO", style: "subheader"}],
                                        [{text: "C. CONTTE. HECTOR VICTORIA 165", style: "subheader"}],
                                        [{text: "COL. NAVIDAD, CUAJIMALPA ", style: "subheader"}],
                                        [{text: "05219 MEXICO, CDMX 05501 ", style: "subheader"},],
                                        
                                    ]
                                },
                                layout: 'headerLineOnly',
                            },
                        ],
                        [{text: "R.F.F MOAO721202675",  style:"subheader", }]
                    ]
                },
                layout: "noBorders",
            },
            {
                
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{text: "Resumen de ahorro", style: "tableHeader", colSpan: 2, alignment: 'center',fillColor: '#eeffee'},{}],
                        [{text: "Concesionario", style: "subheader"},{text: "CONC0001", style: "label"},],
                        [{text: "Ahorro Concesionario", style: "subheader"},{text: "1200.00", style: "label"},],
                        [{text: "Ahorro Propietario ", style: "subheader"},{text: "0.00", style: "label"},],
                        [{text: "Beneficios ", style: "subheader"},{text: "275.50", style: "label"},],
                        [{text: "Adeudo ", style: "subheader"},{text: "0.00", style: "label"},],
                    ]
                },
                layout: 'headerLineOnly',
            },
        
        ]}, 
        
        {
            style: 'tableExample',
            table: {
                headerRows: 0,
                body: [
                    [{ text: "MOVIMIENTOS DEL MES", style: "header", alignment: "center", fillColor: "#eeffee"}],
                    [{text: "OPERADOR: García Reyes Javier"}],
                    [{
                        style: 'tableHeader',
                        table: {
                            headerRows: 1, 
                            body: [
                                [{text:"FECHA",style:"subheader"},
                                 {text:"DESCRIPCIÓN",style:"subheader"},
                                 {text:"ESTACIÓN",style:"subheader"},
                                 {text:"CONSUMO",style:"subheader"},
                                 {text:"PRECIO GAS",style:"subheader"},
                                 {text:"CANTIDAD",style:"subheader"}],

                                 [{text:"2021-11-15",style:"subheader"},
                                 {text:"Consumo en estación",style:"subheader"},
                                 {text:"Carbucentro Regio Gas Azcapotzalco",style:"subheader"},
                                 {text:"22.00",style:"subheader", alignment:"right"},
                                 {text:"13.36",style:"subheader", alignment:"right"},
                                 {text:"293.92",style:"subheader", alignment:"right"}],

                                 [{text:"2021-11-14",style:"subheader"},
                                 {text:"Consumo en estación",style:"subheader"},
                                 {text:"Carbucentro Regio Gas Azcapotzalco",style:"subheader"},
                                 {text:"27.92",style:"subheader", alignment:"right"},
                                 {text:"13.36",style:"subheader", alignment:"right"},
                                 {text:"373.01",style:"subheader", alignment:"right"}],

                            ]
                        },
                        layout: {
                            fillColor: function (rowIndex, node, columnIndex) {
                                return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                            },
                        },
                    }],
                ]
            },
            layout: "noBorders",
        },
    ]
};
