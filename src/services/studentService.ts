import { IUser } from "../models/userModel.js";
import * as Data from "../DAL/data.js";

export const getGrades = async (): Promise<IUser> => {
    const user: IUser = await Data.getGrades();  
    return user;
  };


