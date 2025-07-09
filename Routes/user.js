import express from "express";
import { login, register } from "../Controllers/user.js";

/**
 * User Router - Handles all user authentication related API endpoints
 * Manages user registration and login functionality
 */
const router = express.Router();

/**
 * Route to register a new user in the system
 * POST request that accepts user registration details in the request body
 * Typically includes username, email, password, and other required user information
 * @api - /api/user/register
 */
router.post('/register', register);

/**
 * Route to authenticate an existing user and generate authentication tokens
 * POST request that accepts user credentials (typically email/username and password)
 * Returns authentication token upon successful validation
 * @api - /api/user/login
 */
router.post('/login', login);

export default router;