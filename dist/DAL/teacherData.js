"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrades = exports.changGrade = exports.addGrade = exports.getAllDetails = exports.login = exports.addClass = exports.register = void 0;
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const classModel_1 = __importDefault(require("../models/classModel"));
const register = (teacher) => __awaiter(void 0, void 0, void 0, function* () {
    const TeacherToAdd = yield teacherModel_1.default.create(teacher);
    return TeacherToAdd;
});
exports.register = register;
const addClass = (classRoom) => __awaiter(void 0, void 0, void 0, function* () {
    const classToAdd = yield classModel_1.default.create(classRoom);
    return classToAdd;
});
exports.addClass = addClass;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield teacherModel_1.default.findOne({ email: email, password: password });
    return teacher;
});
exports.login = login;
const getAllDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield teacherModel_1.default.find();
    return users;
});
exports.getAllDetails = getAllDetails;
const addGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield classModel_1.default.updateOne({ _id: id }, { $push: { grades: grade } });
    return student;
});
exports.addGrade = addGrade;
const changGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield classModel_1.default.updateOne({ _id: id }, { $set: { grades: grade } });
    return student;
});
exports.changGrade = changGrade;
const getGrades = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield classModel_1.default.find();
    return students;
});
exports.getGrades = getGrades;
