"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDetails = exports.getAverageGrades = exports.changGrade = exports.addGrade = exports.getGrades = exports.login = exports.register = void 0;
const teacherData = __importStar(require("../DAL/teacherData.js"));
const register = (name, email, password, classRoom) => __awaiter(void 0, void 0, void 0, function* () {
    let newTeacher = {
        name,
        email,
        password,
    };
    const teacherToAdd = yield teacherData.register(newTeacher);
    if (teacherToAdd._id) {
        let newClass = {
            name: classRoom,
            teacher: teacherToAdd._id
        };
        yield teacherData.addClass(newClass);
        return teacherToAdd;
    }
});
exports.register = register;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const teacher = yield teacherData.login(email, password);
    return teacher;
});
exports.login = login;
const getGrades = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield teacherData.getGrades();
    return students;
});
exports.getGrades = getGrades;
const addGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield teacherData.addGrade(id, grade);
    return status;
});
exports.addGrade = addGrade;
const changGrade = (id, grade) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield teacherData.changGrade(id, grade);
    return student;
});
exports.changGrade = changGrade;
const getAverageGrades = () => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield teacherData.getGrades();
    return status;
});
exports.getAverageGrades = getAverageGrades;
const getAllDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield teacherData.getAllDetails();
    return users;
});
exports.getAllDetails = getAllDetails;
