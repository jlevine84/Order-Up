const connection = require("./connection");

const orm = {
  all: (table, callBack)=>{
    const queryString = `select * from ${table}`
    connection.query(queryString, (err, result)=>{
      if (err) throw err;
      callBack(result)
    })
  },
  create: (table, colValue, value, callBack)=>{
    const queryString = `insert into ${table} (${colValue}) values ("${value}")`
    connection.query(queryString, (err, result)=>{
      if (err) throw err;
      callBack(result)
    })
  },
  update: (table, colValue, value, id, callBack)=>{
    const queryString = `update ${table} set ${colValue} = ${value} where id = ${id}`
    connection.query(queryString, (err, result)=>{
      if (err) throw err;
      callBack(result)
    })
  },
  delete: (table, id, callBack)=>{
    const queryString = `delete from ${table} where id = ${id}`
    connection.query(queryString, (err, result)=>{
      if (err) throw err;
      callBack(result)
    })
  }
}

module.exports = orm;