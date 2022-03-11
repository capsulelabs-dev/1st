let express = require("express");
let app = express();

app.get("/", (req,res)=>{

    res.send("homepage")

})

app.listen(3000)