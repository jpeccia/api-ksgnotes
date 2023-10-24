const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRuns() {
  const schemas = [createUsers].join("");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

module.exports = migrationsRuns;
