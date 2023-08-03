const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var userIsAuth = false;

app.use(bodyParser.urlencoded({ extended: true }));

function userCheck (req, res, next) {
    const password = req.body["password"];
    if(password==="DevTown"){
        userIsAuth = true;
}
next();
}

app.use(userCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/check", (req, res) => {
   
if (userIsAuth) {
    userIsAuth = false;
    res.sendFile(__dirname + "/secret.html");
}
else{
    res.sendFile(__dirname + "/index.html");
}
    
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

