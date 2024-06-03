import mysql2 from 'mysql2';

let DB_connection = mysql2.createConnection({
    host:'localhost',
    database: 'assignment_3',
    user :'root',
    password :''
})

export default DB_connection;