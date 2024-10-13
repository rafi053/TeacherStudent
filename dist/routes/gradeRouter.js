"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = require("../controllers/teacherController");
const teachersRouter = (0, express_1.Router)();
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       description: User object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               profile:
 *                 type: object
 *                 properties:
 *                   bio:
 *                     type: string
 *                   socialLinks:
 *                     type: array
 *                     items:
 *                       type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
teachersRouter.post("/", teacherController_1.createUser);
/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Get all the users
 *      responses:
 *          200:
 *              description: A JSON of all the users
 */
teachersRouter.get("/", teacherController_1.getUsers);
/**
 * @swagger
 * /api/users/{username}:
 *   get:
 *     summary: Get a user by username
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: The username of the user
 *     responses:
 *       200:
 *         description: A user object
 *       404:
 *         description: User not found
 */
teachersRouter.get("/:username", teacherController_1.getUser);
exports.default = teachersRouter;
