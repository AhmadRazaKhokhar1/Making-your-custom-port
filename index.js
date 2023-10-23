// eenabling express.js
const express = require('express');

//Initializing the server 
const app = express();

//make your custom port
const port = 5789;



// ==>> NOTE: After every change,=> Ctrl+C then node ./index.js is must! in the command panel


// request / response method for client and server
app.get('/ahmad', (req, res)=>{
    res.send('This page is from Ahmad Raza Khokhar');
});

// type localhost:5789/ahmad to access the targeted fileS
app.get('/ali', (req, res)=>{
    res.send(
              "<div style='font-weight:900; font-size:24px'> This is Bold Text with fontsize of 24px </div>"
            )
})


// listening to the port Note: always at the end of code
app.listen(port,()=>{
     
    console.log(`Server started at the port: ${port}`);
});