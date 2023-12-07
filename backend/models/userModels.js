import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// Hashing the password before saving it to the database
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

userSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({_id:this._id.toString()}, "thisisastringthatisneededforthegeneratingtoken");
        this.tokens = this.tokens.concat({token:token});
        console.log(token);
        await this.save();
        return token;
    } catch (error) {
        console.log("this is the error part " + error);
    }
}

userSchema.statics.countAdmins = async function() {
    try {
      return await this.countDocuments({ isAdmin: true });
    } catch (error) {
      throw new Error(error);
    }
};

// Create models based on the schemas
export const User = mongoose.model('User', userSchema);
