"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function trackMaster() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connect = yield mongoose_1.default.connect('mongodb+srv://mahsez_mongodb:RIgCmZViYWnzR1f5@cluster0.y4rzkw4.mongodb.net/mahsez_DB?retryWrites=true&w=majority&appName=Cluster0');
            console.log(connect, 'connect');
            app.listen(500, () => {
                console.log(`Mahsez Server listening on port ${500}`);
            });
        }
        catch (error) {
            console.log('Error starting server:', error);
        }
    });
}
trackMaster();
