import Student, { IGrade, IStudent } from "../models/studentModel";
import Teacher, { ITeacher } from "../models/teacherModel";
import Class, { IClass } from "../models/classModel";
import { IUser } from "../models/userModel";



export  const  register = async (teacher: ITeacher): Promise<ITeacher> => {
    const TeacherToAdd: ITeacher = await Teacher.create(teacher);
    return TeacherToAdd;
}

export  const  addClass = async (classRoom: IClass): Promise<IClass> => {
    const classToAdd: IClass = await Class.create(classRoom);
    return classToAdd;
}

export  const  login = async (email: string, password: string): Promise<ITeacher | null> => {
    const teacher: ITeacher | null = await Teacher.findOne({ email: email, password: password });
    return teacher;
}



export  const  getAllDetails = async (): Promise<IUser[]> => {
    const users: IUser[] = await Teacher.find();
    return users;
};


export  const  addGrade = async (id: string, grade: IGrade): Promise<IStudent | null> => {
    const student: any = await Class.updateOne({ _id: id }, { $push: { grades: grade } });
    return student;
}


export  const  changGrade = async (id: string, grade: IGrade): Promise<IStudent | null> => {
    const student: any = await Class.updateOne({ _id: id }, { $set: { grades: grade } });
    return student;
}

export  const  getGrades = async (): Promise<IStudent[] | null> => {
    const students: IStudent[] = await Class.find();
    return students;
}







