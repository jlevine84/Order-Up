const express = require("express");
const router = express.Router();

const order = require("../models/order");

router.get("/", (req, res)=>{
    order.all((data)=>{
        const hbarsObj = {
            orders: data
        }
    res.render("index", hbarsObj)
    })
})

router.post("/api/orders", (req, res)=>{
    order.create("fullorder", req.body.fullorder, (result)=>{
        console.log(result)
        res.json({id: result.insertId})
    })
     
})

router.put("/api/orders/:id", (req, res)=>{
    const id = req.params.id
    const complete = req.body.complete
    order.update("complete", complete, id, (result)=>{
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            return res.status(200).end()
        }
    })
})

router.delete("/api/orders/:id", (req, res)=>{
    const id = req.params.id
    order.delete(id, (result)=>{
        if (result.affectedRows === 0){
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router;