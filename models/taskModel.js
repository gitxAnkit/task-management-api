import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task title is required."],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        deadline: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
