var v = require("express");
var app = v();

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/about", function(req, res) {
    res.render("about.ejs");
});

app.listen(process.env.PORT || 8080, function() {
    console.log("Server listening....");
});
