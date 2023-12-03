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

userSchema.pre('save', async function(next) {
    try {
        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.error('Error in pre save:', error);
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        console.log(candidatePassword + " " + this.password.toString());
        return await bcrypt.compare(candidatePassword, this.password.toString());
    } catch (error) {
        throw new Error('Error in comparePassword: ' + error);
    }
};

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
