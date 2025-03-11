import Task from "../models/taskModel.js";
import catchAsync from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

// GET /tasks
// Get all the tasks
export const getTasks = catchAsync(async (req, res, next) => {
    const tasks = await Task.find();

    res.status(200).json({
        success: true,
        count: tasks.length,
        tasks: tasks.length ? tasks : "No tasks found."
    });
})

// POST /tasks
// Add new task
export const addTask = catchAsync(async (req, res, next) => {
    const { title, description, status, deadline } = req.body;

    if (!title) {
        return next(new ErrorHandler("Title is required", 400));
    }
    const task = await Task.create({ title, description, status, deadline });
    res.status(201).json({
        success: true,
        message: "Task added successfully!",
        task
    });
});

// Delete /task/:id
// Delete a task by id
export const deleteTask = catchAsync(async (req, res, next) => {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);
    if (!task) {
        return next(new ErrorHandler("Task not found!!", 404));
    }
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({
        success: true,
        message: "Task deleted successfully!!"
    })
});
