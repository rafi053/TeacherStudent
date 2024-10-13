import Student from "../models/studentModel";
import Teacher from "../models/teacherModel";
import Class, { IClass } from "../models/classModel";
import { IUser } from "../models/userModel";
import exp from "constants";
import e from "express";
import { ExitStatus } from "typescript";


export  const getClass = async ( classRoom: string) : Promise<IClass | null> => {
    const classRoomDetails: IClass | null = await Class.findOne({ name: classRoom });
    return classRoomDetails;
}

export  const  register = async (teacher: ITeacher): Promise<ITeacher> => {
    const TeacherToAdd: ITeacher = await Teacher.create(teacher);
    return TeacherToAdd;
}


export  const  login = async (email: string, password: string): Promise<ITeacher | null> => {
    const teacher: ITeacher | null = await Teacher.findOne({ email: email, password: password });
    return teacher;
}


export  const  getGrades = async (): Promise<IStudent[] | null> => {
    const students: IStudent[] = await Class.find();
    return students;
}

export  const  addToClass = async (id: string, classRoom: IClass): Promise<IStudent | null> => {
