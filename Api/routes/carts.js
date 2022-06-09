import express from "express";

const router = express.Router();


router.get("/", function(req, res){
    res.json({payload: "Carts Here!!!!"})
})


export default router;