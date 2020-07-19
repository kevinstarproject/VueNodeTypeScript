const path = require('path');
const express = require('express'); 
const bodyParser = require('body-parser')
const app = express() ;
const urlsRouter = require("./routes/urls");
const cors = require("cors");
app.use(express.static(path.join(__dirname, '../dist'))) ;
app.use(bodyParser.json());
app.use(cors());
app.use("/shorten",urlsRouter);
app.listen(3000,() => { 
console.log('app listening on port 3000.') 
});
