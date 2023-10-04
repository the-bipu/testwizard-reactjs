import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

userSchema.statics.countAdmins = async function() {
    try {
      return await this.countDocuments({ isAdmin: true });
    } catch (error) {
      throw new Error(error);
    }
};

// Create models based on the schemas
export const User = mongoose.model('User', userSchema);
