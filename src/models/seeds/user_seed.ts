import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user_table").del();

  // Inserts seed entries
  await knex("user_table").insert([
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
}
