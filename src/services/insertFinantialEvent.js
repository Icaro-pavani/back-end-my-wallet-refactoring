import finantialRepository from "../repositories/finantialRepository.js";

export default async function insertFinantialEvent(token, value, type) {
  if (!token) {
    throw { type: "Unauthorized" };
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user.id) {
    throw { type: "Unauthorized" };
  }

  if (!value || !type) {
    throw { type: "missing ententity" };
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw { type: "missing ententity" };
  }

  if (value < 0) {
    throw { type: "missing ententity" };
  }

  await finantialRepository.addFinantialEvent(user.id, value, type);
}
