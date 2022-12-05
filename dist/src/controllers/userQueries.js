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
const knex = require("../../src/config/db/connection");
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex("user_table").select("*");
});
const addUser = (user_table) => __awaiter(void 0, void 0, void 0, function* () {
    return yield knex("user_table").insert(user_table).returning("*");
});
// search
const searchText = (key) => __awaiter(void 0, void 0, void 0, function* () {
    let text = key;
    let movie_title = "movie_title";
    let genre = "genre";
    let movie_plan = "movie_plan";
    //   return await knex("movie_table").where("genre", "like", `%${text}%`);
    //   return await knex("movie_table")
    //     .whereRaw(`LOWER(genre) ILIKE ?`, `%${text}%`)
    //     .whereRaw(`LOWER(movie_plan) ILIKE ?`, `%${text}%`);
    return yield knex("movie_table")
        .where(knex.raw(`LOWER(genre) ILIKE ?`, [`%${text}%`]))
        .orWhere(knex.raw(`LOWER(movie_title) ILIKE ?`, [`%${text}%`]))
        .orWhere(knex.raw(`LOWER(movie_plan) ILIKE ?`, [`%${text}%`]))
        .returning("*");
});
module.exports = { getUser, addUser, searchText };
