"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const BASE_PATH = path_1.default.join(__dirname, "src", "models");
module.exports = {
    development: {
        client: "pg",
        connection: "postgres://postgres:8078@localhost:5432/primevideos",
        migrations: {
            directory: path_1.default.join(BASE_PATH, "migrations"),
        },
        seeds: {
            directory: path_1.default.join(BASE_PATH, "seeds"),
        },
    },
};
