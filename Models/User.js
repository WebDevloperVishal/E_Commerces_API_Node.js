// Import mongoose library for MongoDB schema modeling and database interaction
import mongoose from "mongoose";

// Define the schema structure for User documents
const userSchema = new mongoose.Schema({
    // User's full name - String type and required field
    // NOTE: 'require' should be 'required' to properly enforce this validation
    name: { type: String, require: true },

    // User's email address - String type and required field
    // NOTE: 'require' should be 'required' to properly enforce this validation
    // Consider adding {unique: true} to prevent duplicate email registrations
    email: { type: String, require: true },

    // User's password - String type and required field
    // NOTE: 'require' should be 'required' to properly enforce this validation
    // This should store hashed passwords only, never plain text passwords
    password: { type: String, require: true },

    // Timestamp for when the user account was created
    // Automatically sets to the current date/time if not specified
    createdAt: { type: Date, default: Date.now },
})

// Create and export the User model with the defined schema
// First parameter 'user' defines the collection name (will be pluralized to 'users' in MongoDB)
// Second parameter passes our schema that defines the document structure
export const User = mongoose.model('user', userSchema)