import { IUser } from "../models/userModel.js";
import * as studentData from "../DAL/studentData.js";
import { IStudent } from "../models/studentModel.js";


export const register = async (name: string, email: string, password: string, classRoom: string): Promise<IStudent | undefined> => {
  const classId = await studentData.getClass(classRoom);
  if (!classId) {
    throw new Error("Class not found");
  }
  let newStudent = {
    name,
    email,
    password,
    classId
  }

  const studentToAdd: IStudent = await studentData.register(newStudent);
  await studentData.addClass(studentToAdd._id);
    
}



export const login = async (email: string, password: string): Promise<IStudent | null> => {
  const teacher: IStudent | null = await teacherData.login(email, password);  
  return teacher;
};


export const getGrades = async ( id: string): Promise<IUser> => {
    const user: IUser = await Data.getGrades();  
    return user;
  };


