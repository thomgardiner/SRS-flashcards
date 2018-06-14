let path = require('path');

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/index.html"));
});

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/home.html"));
});

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/signup.html"));
});

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/login.html"));
});
    app.get("/mydecks", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/mydecks.html"));
});

    app.get("/shared", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/shared.html"));
});

    app.get("/shared", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/shared.html"));
});

    app.get("/createdeck", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/createdeck.html"));
});

    app.get("/settings", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/public/settings.html"));
});

}
