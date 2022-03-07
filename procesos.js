
const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database : process.env.DBDATABASE,
    
});

connection.connect((err) => {
    console.log("intentando conexion a BD");
    if(err) throw err;
      console.log("Connected to database: " + process.env.DBHOST+"/"+ process.env.DBDATABASE);
});

function obtenEdoCtaResumen( params, callback) {
    let spSQL = "Call spEdoCtaResumen(Date(?))";
    let query =mysql.format(spSQL, [params.fecha]);
    console.log("query: " + query);
    //console.log(connection);
    connection.query(query, function(err, result) {
        if (err) {
            console.log(err);
            throw err;

        }
        callback(result);
    });
    
}

function obtenEdoCtaMovimientos(data, callback) {
    let spSQL = "Call spEdoCtaMovimientos(?, Date(?))";
    let query =mysql.format(spSQL, [data.contrato, data.fecha])
    console.log("query: " + query);
    connection.query(query, function(err, result) {
        if (err) throw err;
        return callback(result);
    });
    //return callback(result);
}

module.exports = {obtenEdoCtaResumen, obtenEdoCtaMovimientos}