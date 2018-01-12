var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return connMySQL;
}