import getFinantialEvents from "../services/getFinantialsEvents.js";
import insertFinantialEvent from "../services/insertFinantialEvent.js";

export async function insertEvent(req, res) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  const { value, type } = req.body;

  await insertFinantialEvent(token, value, type);

  res.sendStatus(201);
}

export async function getEvents(req, res) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  const events = await getFinantialEvents(token);

  res.send(events.rows);
}

export async function getSum(req, res) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  const sum = getFinantialEvents(token);

  res.send({ sum });
}
