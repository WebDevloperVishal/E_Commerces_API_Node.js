import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

/**
 * Controller to register a new user
 * Creates a user account with hashed password for security
 * 
 * @param {Object} req - Express request object containing user registration details
 * @param {Object} res - Express response object
 */
export const register = async (req, res) => {
    // Extract user registration data from request body
    const { name, email, password } = req.body

    // Check if user with this email already exists in database
    let user = await User.findOne({ email });
    if (user) return res.json({ message: "user alread exists", success: false })

    // Hash the password for security before storing
    // Salt factor of 10 provides good balance of security and performance
    const hashPassword = await bcrypt.hash(password, 10)

    // Create new user with hashed password
    user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    // Return success response with user data
    res.json({ message: "User register Successfully", user, success: true })
}

/**
 * Controller to authenticate a user
 * Verifies credentials and generates a JWT token for authorization
 * 
 * @param {Object} req - Express request object containing login credentials
 * @param {Object} res - Express response object
 */
export const login = async (req, res) => {
    // Extract login credentials from request body
    const { email, password } = req.body

    // Find user by email
    let user = await User.findOne({ email })

    // Return error if user doesn't exist
    if (!user) return res.json({ message: "user not exist", success: false })

    // Compare provided password with stored hash using bcrypt
    const vaildPass = await bcrypt.compare(password, user.password);

    // Return error if password is incorrect
    if (!vaildPass) return res.json({ message: 'Invaild Password', success: false })

    // Generate JWT token containing user ID
    // Token expires in 1 day for security
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT,
        { expiresIn: '1d' }
    )

    // Return success response with JWT token
    // Token will be used for authentication in protected routes
    res.json({ message: `Welcome ${user.name}`, token, success: true })
};