
const express = require("express");
const app = express();
//const mysql = require("mysql2");

const PdfPrinter =  require("pdfmake");
const fs = require('fs');

const fonts = require("./fonts");
const styles = require("./styles");
const {content} =  require("./pdfContent");
const PdfDynamicContent =  require("./pdfDynamicContent");

//require("dotenv").config();

const {obtenEdoCtaResumen, obtenEdoCtaMovimientos } = require("./procesos");

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

    obtenEdoCtaResumen({fecha: '2021-11-25'}, result => {
        contratosData = result;
        for (let index = 0; index < contratosData[0].length; index++) {
            const contrato = contratosData[0][index];
            
            obtenEdoCtaMovimientos({ contrato: contrato.IdContrato, fecha: '2021-11-25' }, result => {
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
