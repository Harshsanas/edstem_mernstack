const express = require('express');

const app = express();

const start = async () => {
    app.listen(3033,()=>{
        console.log('BACKEND SERVER RUNNING on port 3033');
    })
}

start()