const express = require('express')
const http = require('http')
const app = express();
const port = 25565;
const bodyParser = require('body-parser')
const path = require("path")



app.use(bodyParser.json())
app.use(express.static(__dirname))

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, () => { 
    console.log(`listening on port ${port}, 198.7.127.253:${port}`); 
}); 