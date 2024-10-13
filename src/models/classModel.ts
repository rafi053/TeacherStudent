import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface Class {
  _id: Types.ObjectId;
  name: string;
  teacher: Types.ObjectId;
  students: Types.ObjectId[];
}                                                         




const ClassSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

