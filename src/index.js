const express = require("express");
const path = require("path");

const app = express();
const dirname = path.resolve();

app.use('/public', express.static(dirname + '/public'));

app.get("/", (request, response) => {
    //return response.json({ message: "Hello World!" });
    return response.sendFile(path.join(dirname, "src/views/index.html"));
});

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});