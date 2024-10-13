import { NextFunction, Request, Response } from "express";
import  { IUser } from "../models/userModel";
import { ResponseStructure } from "../types/response";
import * as Teacher from "../services/teacherService";

export const addGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const user: IUser = await Teacher.addGrade(id);
    const response = new ResponseStructure(true, user, "Grade added successfully");
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const changGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const user: IUser = await Teacher.changGrade(id);
    const response = new ResponseStructure(true, user, "Grade changed successfully");
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const getAverageGrades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const grade: number = await Teacher.getAverageGrades(id);
    const response = new ResponseStructure(true, grade, "Average grade");
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const getAllDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: IUser[] = await Teacher.getAllDetails();
    const response = new ResponseStructure(true, users);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getGrades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser[] = await Teacher.getGrades();
    const response = new ResponseStructure(true, user);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};