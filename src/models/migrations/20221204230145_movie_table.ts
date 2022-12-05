import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("movie_table", (table) => {
    table.integer("movie_id").primary();
    table.string("movie_title").notNullable();
    table.string("genre").notNullable();
    table.string("url").notNullable();
    table.string("movie_plan").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("movie_table");
}
