var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName, colName) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [colName, tableName], function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
    });
  },

  insertOne: function(tableName, colName) {
    var queryString = "";

    connection.query(queryString, [colName, tableName], function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
    });
  },

  updateOne: function(tableName, colName) {
    var queryString = "";

    connection.query(queryString, [colName, tableName], function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
    });
  }
};

module.exports = orm;
