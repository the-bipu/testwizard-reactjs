import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
    {
        filename: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        mimeType: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const File = mongoose.model('File', fileSchema);
