const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const functions = require('./function')

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/",(req,res) =>{
    res.render("index", {
    pageTitle: "Zajecia dotyczace Node",
    result: functions.add(10,16)

});
});

app.get("/about",(req,res) =>{
    res.render("about");
});

app.listen(port, err => {
    if (err) {
        return console.log(`Blad ${err}`);
    }
    console.log(`strona dziala na porcie ${port}`);
});


// const http = require("http");

// const handler = (req,res) => {
//     console.log("wiadomosc");
// }

// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, (err) => {
//     if (err){
//         return console.log('Bląd ${err}');
//     }
//     console.log('Serwer dziala na porcie ${port}');
// })


////////////przyklad
// const sampleFunctions = require("./function") ;

// sampleFunctions.sayHello();
// sampleFunctions.add(5,9)

// console.log("Hello World")