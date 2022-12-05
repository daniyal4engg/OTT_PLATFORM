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
const express_1 = __importDefault(require("express"));
const { getUser, addUser } = require("../../src/controllers/userQueries");
const router = express_1.default.Router();
// GET
router.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.query);
        const user = yield getUser();
        return res.status(200).send({ message: "all users", data: user });
    }
    catch (error) {
        return res.status(400).send({ message: "Incorrect Url" });
    }
}));
router.post("/post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield addUser(req.body);
        return res.status(200).send({ message: "User registered", user: user });
    }
    catch (error) { }
}));
module.exports = router;
