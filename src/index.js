const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    //return response.json({ message: "Hello World!" });
    return response.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});