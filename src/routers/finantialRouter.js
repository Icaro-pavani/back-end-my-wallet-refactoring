import { Router } from "express";
import {
  getEvents,
  getSum,
  insertEvent,
} from "../controllers/finantialController.js";

const finantialRouter = Router();

finantialRouter.post("/finantial-events", insertEvent);
finantialRouter.get("/finantial-events", getEvents);
finantialRouter.get("/finantial-events/sum", getSum);

export default finantialRouter;
