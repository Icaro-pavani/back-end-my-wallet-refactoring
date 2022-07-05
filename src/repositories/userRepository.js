import connection from "../database.js";

async function getUserByEmail(email) {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
}

async function addUser(name, email, hashedPassword) {
  return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}

const userRepository = { getUserByEmail, addUser };

export default userRepository;
