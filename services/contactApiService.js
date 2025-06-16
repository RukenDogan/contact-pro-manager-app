const Task = require("../models/task");
const User = require("../models/user");

// récupére la liste des tasks
module.exports.getTasks = async (query) => {

    try {
        let tasks = await Task.find(query);
        return tasks;    
    } catch(e) {
        // Log Errors
        throw Error(`Error while query all Tasks : ${e.message}`)
    }
}

// récupère une task suivant son id
module.exports.getTask = async (query) => {

    try { 
        let task = await Task.findOne(query).populate('user');
        return task;    
    } catch(e) {
        // Log Errors
        throw Error(`Error while query one Task : ${e.message}`)
    }
}

// crée une task
module.exports.createTask = async (task) => {

    try {
        let newTask = await task.save();
        await User.findByIdAndUpdate({_id: newTask.user}, { $push: { tasks: newTask._id } });     
        return newTask;
    } catch(e) {
        // Log Errors
        throw Error(`Error while save Task : ${e.message}`)
    }    
}

// met à jour une task
module.exports.updateTask = async (query, task) => {
    try {
        return await Task.updateOne(query, task);
    } catch(e) {
        // Log Errors
        throw Error(`Error while update Task : ${e.message}`)
    }          
}

// supprime une task
module.exports.deleteTask = async (query) => {
    try {
        return await Task.deleteOne(query);
    } catch(e) {
        // Log Errors
        throw Error(`Error while delete Task : ${e.message}`)
    }          
}