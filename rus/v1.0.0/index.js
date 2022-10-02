var express = require('express'),
    app = express();
 
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(request, response)  {
   
    response.render("index.ejs");
});

app.get("/game", function(request, response)  {
   
    response.render("os.ejs");
});
 
app.listen(9090);