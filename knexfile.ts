import path from "path";

const BASE_PATH = path.join(__dirname, "src", "models");

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://postgres:8078@localhost:5432/primevideos",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
