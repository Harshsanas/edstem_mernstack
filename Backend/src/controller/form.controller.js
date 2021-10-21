const express = require('express')

const router = express.Router()

const Forms=require('../model/form.model')

router.get("/form",async (req, res)=>{
    try{
        const forms = await Forms.find({}).populate("form").lean().exec()

        res.status(200).json({forms})

        // console.log(res)
    }catch(err){
        res.status(401).json({status: '404 Not Found',err: err.message})
    }
})

router.post("/form", async (req, res) => {

    const {id,firstname,lastname,email, password, comfirmpassword} = req.params

    console.log(id, firstname, lastname, email, password, comfirmpassword);
  try {
    const newforms = await Forms.create(req.body);

    res.status(200).json({ newforms });

  } catch (err) {
    res.status(401).json({ err: err.message });
  }
});

module.exports=router;