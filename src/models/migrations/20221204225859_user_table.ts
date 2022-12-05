import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_table", (table) => {
    table.increments().primary();
    table.string("user_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("role").notNullable();
    table.string("user_plan").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_table");
}
