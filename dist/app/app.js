"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
// import globalErrorHandler from './middlewares/globalErrorhandler';
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['https://mahsez.vercel.app', 'http://localhost:5173'],
    credentials: true,
};
/// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
//   app.use(setVisitorCookie);
app.get('/', (req, res) => {
    res.send('Mahsez Server In Progress!');
});
// app.use(globalErrorHandler);
// not found
app.use(notFound_1.default);
exports.default = app;
