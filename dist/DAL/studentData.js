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
exports.addToClass = exports.getGrades = exports.login = exports.register = exports.getClass = void 0;
const studentModel_1 = __importDefault(require("../models/studentModel"));
const classModel_1 = __importDefault(require("../models/classModel"));
const getClass = (classRoom) => __awaiter(void 0, void 0, void 0, function* () {
    const classRoomDetails = yield classModel_1.default.findOne({ name: classRoom });
    return classRoomDetails;
});
exports.getClass = getClass;
const register = (student) => __awaiter(void 0, void 0, void 0, function* () {
    const studentToAdd = yield studentModel_1.default.create(student);
    return studentToAdd;
});
exports.register = register;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield studentModel_1.default.findOne({ email: email, password: password });
    return teacher;
});
exports.login = login;
const getGrades = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentModel_1.default.findById(id).populate({
        path: "classId",
        select: "name, teacher",
    });
    return students;
});
exports.getGrades = getGrades;
const addToClass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield classModel_1.default.updateOne({ _id: id }, { $push: { students: id } });
    return student;
});
exports.addToClass = addToClass;
