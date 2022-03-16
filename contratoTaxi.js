var _ = require('underscore');
var dateFormat = require('dateformat');
const { textoContrato } = require('./styles');


class pdfContratoTaxi {

    constructor (data ) {
        this.contrato = data[0];
        console.log(JSON.stringify(this.contrato));
    }

    getPdfHeader() {
        this.header = {
            text: [
                {text: "Contrato # 4A / 8 Contrato de Membresía Provisional (Programa Piloto)"},
                {text: "Concesionario - TAXI"},
                {text: "No. Identificación del Contrato: IQ-001 "}
            ],
            style: "headHojaContrato",
            alignment: "left", 
            fontSize: 8
        }
    }

    getPdfContent() {
        this.content = [
            {text: [
                  { text: "CONTRATO DE MEMBRESÍA PROVISIONAL AL ", style: "textoContrato"},
                  { text: "PROGRAMA DE BENEFICIOS ", style: "headersContrato"},
                  { text: "QUE CELEBRAN POR UNA PARTE ", style: "textoContrato"},
                  { text: "OPERADORA DEL PROGRAMA DE BENEFICIOS SINDICAL, S.A DE C.V.", style: "headersContrato"},
                  { text: ", A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO", style: "textoContrato"},
                  { text: " “LA OPERADORA DEL PROGRAMA DE BENEFICIOS”", style: "headersContrato"},
                  { text: ", REPRESENTADA EN ESTE ACTO POR SU APODERADO (A) GENERAL ", style: "textoContrato"},
                  { text: "C. PEDRO RINCON RIVAS", style: "headersContrato"},
                  { text: ", Y POR LA OTRA, LA PERSONA FÍSICA ", style: "textoContrato"},
                  { text: this.contrato.Concesionario , style: "headesContrato"},
                  { text: ", A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO ", style: "textoContrato"},
                  { text: "“EL O LA CONCESIONARIA”", style: "textoContrato"},
                  { text: ". A LOS COMPARECIENTES EN EL CURSO DE ESTE CONTRATO TAMBIÉN SE LES DESIGNARÁ EN SU CONJUNTO COMO ", style: "textoContrato"},
                  { text: "“LAS PARTES”", style: "headersContrato"},
                  { text: ", AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS:\n\n\n", style: "textoContrato"},
                  { text: "A N T E C E D E N T E S\n\n", style: "headersContrato"},
                  { text: "Que el 25 de septiembre de 2015, más de 150 líderes mundiales asistieron a la Cumbre de las Naciones Unidas sobre el Desarrollo "+
                          "Sostenible en Nueva York con el fin de aprobar la Agenda para el Desarrollo Sostenible. El documento final, titulado "+
                          "“Transformar Nuestro Mundo: la Agenda 2030 para el Desarrollo Sostenible”, fue adoptado por los 193 Estados Miembros de las Naciones Unidas. "+
                          "Dicho documento incluye los 17 Objetivos del Desarrollo Sostenible (ODS) cuyo objetivo es poner fin a la pobreza, luchar contra la desigualdad "+
                          "y la injusticia, y hacer frente al cambio climático sin que nadie quede atrás para el 2030\n\n", style: "textoContrato"},
                  { text: "“La Agenda 2030 plantea que todas las personas deben tener acceso a sistemas de transporte seguros, asequibles, accesibles y sostenibles. "+
                          "Y esto incluye la seguridad vial, principalmente mediante la ampliación del transporte público”.\n\n", style: "textoContrato"},
                  { text: "Entre las diez recomendaciones que ofrece la agenda, destaca la adopción a corto y largo plazo de estrategias que reduzcan las " +
                          "emisiones de carbono mediante la implementación de nuevas tecnologías.\n\n", style: "textoContrato" },
                  { text: "Derivado de las resoluciones de la mencionada agenda y en busca de cumplir con su objeto y permitir a sus agremiados ofrecer servicios "+
                          "con tecnologías de vanguardia, “MOVIMIENTO NACIONAL DE TRANSPORTE EN GENERAL” ASOCIACIÓN CIVIL encomendó a “LA PROMOTORA”, estructurar "+
                          "alianzas estratégicas que permitan la consecución de estos propósitos, mediante la modificación de los vehículos utilizados por sus sindicatos "+
                          "y organizaciones agremiados, con el propósito de que estos últimos cuenten con un motor a GAS NATURAL o GAS LICUADO DE PETRÓLEO, en el corto plazo, "+
                          "siendo esta la primera de las acciones que se realizarán. A la implementación de los beneficios derivados de dichas alianzas en lo sucesivo se les "+
                          "denominará “EL PROGRAMA DE BENEFICIOS”..\n\n", style: "textoContrato" },
                  { text: "D E CL A R A C I O N E S\n\n", style: "headersContrato"},
                  { text: "Declara “LA OPERADORA DEL PROGRAMA DE BENEFICIOS”, por conducto de su representante:\n\n", style: "textoContrato", bold: true},
                  {
                    type: 'upper-alpha',
                    ol: [
                        'item 1',
                        /*
                        [
                            { text: "Que es una sociedad mercantil legalmente constituida y organizada conforme a las leyes de los Estados Unidos Mexicanos, bajo la denominación social ", style: "textoContrato"},
                            { text: "OPERADORA DEL PROGRAMA DE BENEFICIOS SINDICAL, S.A. DE C.V.", style: "headersContrato"},
                            { text: ", según consta en la escritura pública número 158,655 de fecha 15 de octubre de 2021, otorgada ante la fe del Lic. Eduardo Garduño García Villalobos, "+
                                    "Notario Público 135  de la Ciudad de México, e inscrito su primer testimonio ante el Registro Público de la Propiedad y de Comercio de la Ciudad de México, "+
                                    "bajo el folio mercantil electrónico número N-2021086047, de fecha 16 de noviembre del año 2021.", style: "textoContrato"}
                        ],
*/
                        'item 2',
                        'item 3'
                    ]
                  },
                

            ], 
             style: "textoContrato", 
             alignment: "justify"}   
     
        ]
        return this.content;
    }
}
   

module.exports = pdfContratoTaxi;