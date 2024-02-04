"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res, next) {
    res.send("Hello World.");
});
var port = 4000;
app.listen(port, function () {
    console.log("App listening at port ".concat(port));
});
