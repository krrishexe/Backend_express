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
const createTodoTableQuery = `
    create table todos(
        id serial primary key,
        text varchar(255) not null,
        description text not null,
        email varchar(255) unique not null,
        password varchar(255) not null
    )
`;
const insertqueryIntoTable = `
    insert into todos(text,description,email,password)
    values
    ('good to go','I am ready to good to go','three@three.com','1212')
`;
const createTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("helloo");
        const client = yield (0, connect_1.connectDB)();
        yield client.query(createTodoTableQuery);
        console.log("Created new table");
    }
    catch (error) {
        console.log(error);
    }
});
const insertIntoTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, connect_1.connectDB)();
        const res = yield client.query(insertqueryIntoTable);
        console.log("Data added to the db", res);
    }
    catch (error) {
        console.log(error);
    }
});
insertIntoTable();
