import finantialRepository from "../repositories/finantialRepository.js";

export default async function getFinantialEvents(token) {
  if (!token) {
    throw { type: "Unauthorized" };
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user.id) {
    throw { type: "Unauthorized" };
  }

  const events = await finantialRepository.getFinantials(user.id);

  const sum = events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );

  return sum;
}
