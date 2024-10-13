import { Router } from "express";
import {
  addGrade,
  changGrade,
  getAverageGrades,
  getAllDetails,
  getGrades,
  
} from "";
import { ChangeStream } from "mongodb";

const teacherRouter = Router();

teacherRouter.post("/", addGrade);
teacherRouter.get("/", getGrades);
teacherRouter.get("/:id", changGrade);
teacherRouter.put("/:id", getAverageGrades);
teacherRouter.delete("/:id", getAllDetails);

export default teacherRouter;
