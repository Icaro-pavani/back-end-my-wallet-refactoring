import signInUserRoutine from "../services/signInUserRoutine.js";
import signUpUserRoutine from "../services/signUpUserRoutine.js";

export async function signUpUser(req, res) {
  const { name, email, password } = req.body;

  await signUpUserRoutine(name, email, password);

  res.sendStatus(201);
}

export async function signInUser(req, res) {
  const { email, password } = req.body;

  const token = await signInUserRoutine(email, password);

  res.send({
    token,
  });
}
