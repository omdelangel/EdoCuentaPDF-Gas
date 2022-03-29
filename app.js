
const express = require("express");
const app = express();
//const mysql = require("mysql2");

const PdfPrinter =  require("pdfmake");
const fs = require('fs');

const fonts = require("./fonts");
const styles = require("./styles");
const {content} =  require("./pdfContent");
const PdfDynamicContent =  require("./pdfDynamicContent");
const ContratoTaxi =  require("./contratoTaxi");

//require("dotenv").config();

const {obtenEdoCtaResumen, obtenEdoCtaMovimientos, informacionContrato } = require("./procesos");

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
});


let dia = "2021-11-15";


app.get("/estados-cuenta", (req, res) => {
    console.log("Iniciando " );
    var movtosData=[];
    var contratosData = [];
    var pdfObj = [];

    //let fechaCorte =  req.query.fechaCorte; 
    let fechaCorte = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    obtenEdoCtaResumen({fecha: fechaCorte}, result => {
        contratosData = result;
        for (let index = 0; index < contratosData[0].length; index++) {
            const contrato = contratosData[0][index];
            
            obtenEdoCtaMovimientos({ contrato: contrato.IdContrato, fecha: fechaCorte }, result => {
                movtosData = result;
                console.log("preparando Edo Cta para contrato: " + contrato.IdContrato);
                pdfObj = new PdfDynamicContent(contrato, movtosData);
                let docDefinition = {
                    pageSize: 'LETTER',
                    pageMargins: [ 40, 50, 40, 60 ],
                    content: pdfObj.getPdfContent(),
                    styles: styles,
                };
                const printer = new PdfPrinter(fonts);

                let pdfDoc = printer.createPdfKitDocument(docDefinition);

                pdfDoc.pipe(fs.createWriteStream("pdfs/EC_"+contrato.IdContrato+"_20211115.pdf"));
                pdfDoc.end();
                pdfDoc.release;
                pdfObj.destroy;
            });
        };
    });
});



app.get("/contrato-taxi", (req, res) => {
    console.log("Iniciando " );
    var movtosData=[];
    var contratoData = [];
    var pdfObj = [];
   
    let IdContract =  req.query.IdContrato; 
    console.log("IdContrato: " + IdContract);
    informacionContrato({IdContrato: 1}, result => {
        contratoData = result;
        console.log("preparando Información  para contrato: " + IdContract);
        pdfObj = new ContratoTaxi(contratoData[0]);
        let docDefinition = {
                    pageSize: 'LETTER',
                    font: 'Arial Narrow',
                    pageMargins: [ 60, 60, 60, 60 ],
                    header: pdfObj.getPdfHeader(),
                    content: pdfObj.getPdfContent(),
                    styles: styles,
        };
        const printer = new PdfPrinter(fonts);

        let pdfDoc = printer.createPdfKitDocument(docDefinition);

        pdfDoc.pipe(fs.createWriteStream("pdfs/Contract_"+contratoData[0][0].IdContrato+".pdf"));
        pdfDoc.end();
        pdfDoc.release;
        pdfObj.destroy;
    });
        
});


/*
const pdfObj =  new  PdfDynamicContent({fecha: dia});

let docDefinition = {
    //content: content,
    content: pdfObj.getPdfContent(),
    styles: styles,
};


const printer = new PdfPrinter(fonts);


let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/EdoCuentaGas.pdf"));
pdfDoc.end();
*/
