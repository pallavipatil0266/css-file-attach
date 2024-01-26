import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/form', function (req, res){
 console.log(req.body)

});

app.get('/form', function (req, res) {
        console.log(__dirname)
        res.render("form.ejs", {})

});


app.listen(4500, function (res, req) {
        console.log("server start")
})