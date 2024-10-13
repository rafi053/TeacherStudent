import { IUser } from "../models/userModel.js";
import * as Data from "../DAL/data.js";
import e from "express";

export const getGrades = async (): Promise<IUser[]> => {
  const users: IUser[] = await Data.getGrades();
  return users;
};


export const addGrade = async (id: string): Promise<IUser> => {
  const user: IUser = await Data.addGrade(id);
  return user;
};


export const changGrade = async (id: string): Promise<IUser> => {
  const user: IUser = await Data.changGrade(id);
  return user;
};


export const getAverageGrades = async (id: string): Promise<number> => {
  const grade: number = await Data.getAverageGrades(id);
  return grade;
};


export const getStudents = async (): Promise<IUser[]> => {
  const user: IUser[] = await Data.getStudents();
  return user;
};


export const getAllDetails = async (): Promise<IUser[]> => {
  const users: IUser[] = await Data.getAllDetails();
  return users;
}