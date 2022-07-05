import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userRepository from "../repositories/userRepository.js";

export default async function signInUserRoutine(email, password) {
  if (!email || !password) {
    throw { type: "missing ententity" };
  }

  const { rows } = await userRepository.getUserByEmail(email);
  const [user] = rows;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw { type: "Unauthorized" };
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
}
