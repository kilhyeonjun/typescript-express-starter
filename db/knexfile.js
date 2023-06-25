require("dotenv").config();
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "test_db",
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_user_migrations",
    },
  },
};
