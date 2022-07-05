import connection from "../database.js";

async function addFinantialEvent(id, value, type) {
  return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [id, value, type]
  );
}

async function getFinantials(id) {
  return connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [id]
  );
}

const finantialRepository = {
  addFinantialEvent,
  getFinantials,
};

export default finantialRepository;
