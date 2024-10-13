import { IUser } from "../models/userModel.js";
import * as Auth from "../DAL/data.js";

export const register = async (user: User): Promise<IUser> => {
    const userToAdd: IUser = await Auth.register(user);  
    return userToAdd;
  };


export const login = async (fullName: string, password: string): Promise<IUser | null> => {
    const user: IUser | null = await Auth.login(fullName, password);  
    return user;
  };