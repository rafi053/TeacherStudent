import { Router } from "express";
import {
  addGrade,
  changGrade,
  getAverageGrades,
  getAllDetails,
  getGrades,
  login,
  register,
  
} from "../controllers/teacherController";
import { ChangeStream } from "mongodb";
import authMiddleware from "../middleware/authMiddleware";

const teacherRouter = Router();
teacherRouter.post("/register", register);
teacherRouter.post("/login", login);
teacherRouter.use(authMiddleware);
teacherRouter.put("/:id", addGrade);
teacherRouter.get("/:id", getGrades);
teacherRouter.put("/:id", changGrade);
teacherRouter.get("/:id", getAverageGrades);
teacherRouter.get("/", getAllDetails);

export default teacherRouter;
