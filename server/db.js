import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "piyush",
  password: "P_dixit2004",
  database: "blog",
});
