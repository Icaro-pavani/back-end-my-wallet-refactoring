import { Router } from "express";

import authRouter from "./authRouter.js";
import finantialRouter from "./finantialRouter.js";

const router = Router();

router.use(authRouter);
router.use(finantialRouter);

export default router;
