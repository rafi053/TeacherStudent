import { Router } from "express";
import {
  addGrade,
  changGrade,
  getAverageGrades,
  getAllDetails,
  getGrades,
  
} from "../controllers/teacherController";
import { ChangeStream } from "mongodb";

const teacherRouter = Router();

teacherRouter.put("/:id", addGrade);
teacherRouter.get("/:id", getGrades);
teacherRouter.put("/:id", changGrade);
teacherRouter.get("/:id", getAverageGrades);
teacherRouter.get("/", getAllDetails);

export default teacherRouter;
