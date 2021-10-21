const express = require('express');

const app = express();

const cors=require('cors');

app.use(express.json());

const connect = require('./config/db');

const formController = require('./controller/form.controller')

app.use(cors());

app.use("/",formController);

const start = async () => {
    await connect()
    app.listen(3033,()=>{
        console.log('BACKEND SERVER RUNNING on port 3033');
    })
}

start()