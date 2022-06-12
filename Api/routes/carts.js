import express from "express";

const router = express.Router();


router.get("/", function(req, res){

    try{
        res.json({
            success: true,
            payload: "Carts Here!!!!"})
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }
})


export default router;