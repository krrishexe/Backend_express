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
const connect_1 = require("./connect");
const getUserQuery = `
    select * from todos where email = $1;
`;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, connect_1.connectDB)();
        const values = [email];
        const result = yield client.query(getUserQuery, values);
        if (result.rows.length > 0) {
            console.log("user found : ", result.rows[0]);
        }
        else {
            console.log("No user with email " + email + "exisits");
        }
    }
    catch (error) {
        console.log(error);
    }
});
getUser('one@one.com');
