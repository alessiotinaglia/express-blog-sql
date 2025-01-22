import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error("Errore di connessione al database:", err.stack);
        return;
    }
    console.log("Connesso al database");
});

export default connection;
