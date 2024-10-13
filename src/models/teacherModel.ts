import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";


export interface Teacher {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  class: Types.ObjectId;
}



const TeacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

