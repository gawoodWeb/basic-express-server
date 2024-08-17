let express = require("express");
let app = express();


app.use(express.static('/public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.set('views', './views');
app.set('view engine', 'ejs');
// app.set("Access-Control-Allow-Origin", "*");

app.get("/", (req, res)=>{
    res.render("index");
})


const port = 8000;
app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`)
})



