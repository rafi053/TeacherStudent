import { Request, Response, NextFunction } from 'express';
import { authRegister, authLogin } from '../services/authService.js';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/userModel';
import { ResponseStructure } from "../types/response";

import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET || "default_secret";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user: IUser = req.body;
    const createUser : IUser = await authRegister(user);
    const response = new ResponseStructure(true, createUser, "User created successfully");
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user: IUser = await authLogin(email, password);
    if (!user) {
      const response = new ResponseStructure(false, {}, 'Invalid email or password');
      res.status(401).json(response);
      return;
    }
const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true ,  maxAge: 3600000 } );
    const response = new ResponseStructure(true, user, 'User logged in successfully');
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};