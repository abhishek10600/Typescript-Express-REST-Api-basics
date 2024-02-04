"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res, next) => {
    res.send("Hello World by express + TS by Abhishek Sharma now");
});
app.post("/register", (req, res, next) => {
    const { name, email, password, phone } = req.body;
    console.log({ name, email, password, phone });
    const user = {
        name,
        email,
        password,
        phone
    };
    res.status(201).json({
        success: true,
        message: "user created successfully.",
        user
    });
});
app.post("/login", (req, res, next) => {
    const { email, password } = req.body;
    res.status(200).json({
        success: true,
        message: "Logged in successfully.",
        email,
        password
    });
});
const port = 4000;
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
