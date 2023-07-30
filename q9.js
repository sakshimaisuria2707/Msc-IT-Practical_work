const mysql = require("nodejs-mysql").default;

const conn = {
  host: "localhost",
  user: "root",
  password: "",
  database: "employeetb",
};

const db = mysql.getInstance(conn);

db.connect()
  .then(() => {
    console.log(`Connected!!`);

    var sql =
      "INSERT INTO employeetb (empid,empname,joinDate) VALUES (26,'sakshi','29-07-2023')";
    console.log("Record Inserted!!");
    return db.exec(sql);
  })

  .then((display) => {
    // var sqlDisplay = "SELECT * FROM employeetb";
    // console.log(display);
    return db.exec("SELECT * FROM employeetb");
  })

  .then((result) => {
    console.log("Employee Name \t Date of Join");
    for (var i in result) {
      console.log(result[i].empname + " \t\t " + result[i].joinDate);
    }
  })

  .catch((err) => {
    console.log("Error: " + err);
    process.exit(0);
  });
