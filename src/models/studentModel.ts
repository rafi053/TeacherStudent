import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IGrade {
  subject: string;
  grade: number;
  comment: string;
}


export interface Student {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  classId: Types.ObjectId;
  grades: IGrade[];
}

const StudentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classId: { type: Schema.Types.ObjectId, ref: 'Class' },
  grades: [{ subject: String, grade: Number }],
});

