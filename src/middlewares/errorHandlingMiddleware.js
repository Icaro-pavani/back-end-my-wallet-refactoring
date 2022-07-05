export default async function errorHandlingMiddleware(error, req, res, next) {
  console.log(error);
  if (error.type === "missing ententity") return res.sendStatus(422);
  if (error.type === "user already exist") return res.sendStatus(409);
  if (error.type === "Unauthorized") return res.sendStatus(401);

  return res.sendStatus(500);
}
