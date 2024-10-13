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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrades = exports.getAllDetails = exports.getAverageGrades = exports.changGrade = exports.addGrade = exports.login = exports.register = void 0;
const response_1 = require("../types/response");
const Teacher = __importStar(require("../services/teacherService"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, classRoom } = req.body;
        const newTeacher = yield Teacher.register(name, email, password, classRoom);
        const response = new response_1.ResponseStructure(true, newTeacher, "Teacher created successfully");
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const teacher = yield Teacher.login(email, password);
        if (teacher) {
            const token = jsonwebtoken_1.default.sign({ id: teacher._id }, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
            const response = new response_1.ResponseStructure(true, teacher, 'User logged in successfully');
            res.status(200).json(response);
        }
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const addGrade = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { grade } = req.body;
        const status = yield Teacher.addGrade(id, grade);
        const response = new response_1.ResponseStructure(true, status, "Grade added successfully");
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.addGrade = addGrade;
const changGrade = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { grade } = req.body;
        const status = yield Teacher.changGrade(id, grade);
        const response = new response_1.ResponseStructure(true, status, "Grade changed successfully");
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.changGrade = changGrade;
const getAverageGrades = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const grade = yield Teacher.getAverageGrades();
        const response = new response_1.ResponseStructure(true, grade, "Average grade");
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.getAverageGrades = getAverageGrades;
const getAllDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const users = yield Teacher.getAllDetails(id);
        const response = new response_1.ResponseStructure(true, users);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllDetails = getAllDetails;
const getGrades = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield Teacher.getGrades();
        const response = new response_1.ResponseStructure(true, student);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.getGrades = getGrades;
