const orm = require("../config/orm")

const order = {
    all: (callBack)=>{
        orm.all("orders", (result)=>{
            callBack(result)
        })
    },
    create: (colValue, value, callBack)=>{
        orm.create("orders", colValue, value, (result)=>{
            callBack(result)
        })
    },
    update: (colValue, value, id, callBack)=>{
        orm.update("orders", colValue, value, id, (result)=>{
            callBack(result)
        })
    },
    delete: (id, callBack)=>{
        orm.delete("orders", id, (result)=>{
            callBack(result)
        })
    }
}

module.exports = order;