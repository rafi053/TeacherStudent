"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const studentRouter = (0, express_1.Router)();
studentRouter.post("/register", studentController_1.register);
studentRouter.post("/login", studentController_1.login);
studentRouter.use(authMiddleware_1.default);
studentRouter.get("/:id", studentController_1.getGrades);
exports.default = studentRouter;
