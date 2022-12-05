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
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("user_table").del();
        // Inserts seed entries
        yield knex("user_table").insert([
            {
                id: 1,
                user_name: "daniyal",
                email: "daniyal4engg@gmail.com",
                role: "admin",
                user_plan: "premium",
            },
            {
                id: 2,
                user_name: "danny",
                email: "daniyalshaikhnov13@gmail.com",
                role: "user",
                user_plan: "basic",
            },
        ]);
    });
}
exports.seed = seed;
