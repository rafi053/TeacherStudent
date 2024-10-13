"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = require("../controllers/teacherController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const teacherRouter = (0, express_1.Router)();
teacherRouter.post("/register", teacherController_1.register);
teacherRouter.post("/login", teacherController_1.login);
teacherRouter.use(authMiddleware_1.default);
teacherRouter.put("/:id", teacherController_1.addGrade);
teacherRouter.get("/:id", teacherController_1.getGrades);
teacherRouter.put("/:id", teacherController_1.changGrade);
teacherRouter.get("/:id", teacherController_1.getAverageGrades);
teacherRouter.get("/", teacherController_1.getAllDetails);
exports.default = teacherRouter;
