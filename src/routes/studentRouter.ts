import { Router } from "express";
import { getGrades } from "../controllers/studentController";
import { get } from "http";

const studentRouter = Router();



studentRouter.get("/:id", getGrades);

export default studentRouter;
