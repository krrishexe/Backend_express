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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const pg_1 = require("pg");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({
        host: 'localhost',
        user: 'postgres',
        database: 'postgres',
        password: '1212',
        port: 5432,
        // connectionString:'postgres://evlkdrse:zxOVfOc3-Jst1PqviqwaJy50lGiuyn8d@manny.db.elephantsql.com/evlkdrse'
    });
    yield client.connect();
    return client;
});
exports.connectDB = connectDB;
