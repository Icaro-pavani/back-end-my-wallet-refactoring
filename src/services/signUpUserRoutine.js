import bcrypt from "bcrypt";

import userRepository from "../repositories/userRepository.js";

export default async function signUpUserRoutine(name, email, password) {
  if (!name || !email || !password) {
    throw { type: "missing ententity" };
  }

  const existingUsers = await userRepository.getUserByEmail(email);

  if (existingUsers.rowCount > 0) {
    throw { type: "user already exist" };
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await userRepository.addUser(name, email, hashedPassword);
}
