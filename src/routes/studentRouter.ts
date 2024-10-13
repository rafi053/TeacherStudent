import { Router } from "express";
import { getGrades, login, register } from "../controllers/studentController";
import authMiddleware from "../middleware/authMiddleware";


const studentRouter = Router();


studentRouter.post("/register", register);
studentRouter.post("/login", login);
studentRouter.use(authMiddleware);
studentRouter.get("/:id", getGrades);

export default studentRouter;
