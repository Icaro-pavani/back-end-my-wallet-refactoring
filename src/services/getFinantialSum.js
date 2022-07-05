import finantialRepository from "../repositories/finantialRepository.js";

export default async function getFinantialSum(token) {
  if (!token) {
    throw { type: "Unauthorized" };
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user.id) {
    throw { type: "Unauthorized" };
  }

  const events = await finantialRepository.getFinantials(user.id);

  return events;
}
