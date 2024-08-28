const mysql = require('mysql')

function insert ( connection ,data ,callback ) {
    let insertQuery = "INSERT INTO users (id, name, email)VALUES (?, ?, ?);";
    let query = mysql.format(insertQuery, [data.id, data.name, data.email])
    connection.query( query, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

function read(connection, callback) {
    connection.query('SELECT * FROM users', function (err, result){
        if (err) throw err;
        callback(result)
    })
}

module.exports = {insert, read}