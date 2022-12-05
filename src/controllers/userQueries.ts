const knex = require("../../src/config/db/connection");
import { UserStructure } from "../../Types/types";

const getUser = async () => {
  return await knex("user_table").select("*");
};
const addUser = async (user_table: UserStructure) => {
  return await knex("user_table").insert(user_table).returning("*");
};

// search
const searchText = async (key: string) => {
  let text = key;
  let movie_title = "movie_title";
  let genre = "genre";
  let movie_plan = "movie_plan";
  //   return await knex("movie_table").where("genre", "like", `%${text}%`);
  //   return await knex("movie_table")
  //     .whereRaw(`LOWER(genre) ILIKE ?`, `%${text}%`)
  //     .whereRaw(`LOWER(movie_plan) ILIKE ?`, `%${text}%`);
  return await knex("movie_table")
    .where(knex.raw(`LOWER(genre) ILIKE ?`, [`%${text}%`]))
    .orWhere(knex.raw(`LOWER(movie_title) ILIKE ?`, [`%${text}%`]))
    .orWhere(knex.raw(`LOWER(movie_plan) ILIKE ?`, [`%${text}%`]))
    .returning("*");
};

module.exports = { getUser, addUser, searchText };
