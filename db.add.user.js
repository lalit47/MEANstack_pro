const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "Lalit@123",
  database: "user_db",
};

let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "insert into users (Fname,Lname,username, password,Cpassword,email,mobile) VALUES (?,?,?,?,?,?,?)";
  await connection.queryAsync(sql, [
    input.Fname,
    input.Lname,
    input.username,
    input.password,
    input.Cpassword,
    input.email,
    input.mobile,
  ]);

  await connection.endAsync();
};

let additem = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "insert into item (id,grocery) VALUES (?,?)";
  await connection.queryAsync(sql, [
    input.id,
    input.grocery,

  ]);

  await connection.endAsync();
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "select *  from users where username=? and password=?";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.password,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};

module.exports = { addUser, authenticateUser, additem };
