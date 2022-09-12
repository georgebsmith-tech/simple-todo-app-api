"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//@ts-ignore
const db = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.MONGO_URI;
(0, mongoose_1.connect)(db, {})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
app.get("/", (req, res, next) => {
    return res.send("We're up and running");
});
app.use("/api/tasks", routes_1.tasksRoutes);
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            status: error.status || 500,
            message: error.message
        }
    });
});
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log("App is running at port " + PORT);
});
