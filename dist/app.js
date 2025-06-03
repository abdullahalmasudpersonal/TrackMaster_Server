"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
// import globalErrorHandler from './middlewares/globalErrorhandler';
const app = (0, express_1.default)();
const corsOptions = {
    // origin: [ 'http://localhost:5173'],
    credentials: true,
};
/// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
//   app.use(setVisitorCookie);
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('TrackMaster Server In Progress!');
});
// app.post('/upload', (req, res) => {
//   const data = req.body;
//   fs.writeFileSync('logs/system_data.json', JSON.stringify(data, null, 2));
//   res.send('Data received');
// });
// app.use(globalErrorHandler);
// not found
app.use(notFound_1.default);
exports.default = app;
