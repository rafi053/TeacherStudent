import { Request, Response, NextFunction } from "express";
import { ResponseStructure } from "../types/response";
import { IUser } from "../models/userModel";
import * as Student from "../services/studentService";

export const getGrades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser = await Student.getGrades();
    const response = new ResponseStructure(true, user);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

