let prompt = require('prompt-sync')();

type Task = {
    id: string,
    name: string,
    done: boolean
}

let tasks: Task[] = [];

function addTask(taskName: string): void {
    let newId: string = "1";

    if (tasks.length > 0) {
        newId = (parseInt(tasks[tasks.length - 1]!.id) + 1).toString();
    }

    const newTask: Task = {
        id: newId,
        name: taskName,
        done: false
    };

    tasks.push(newTask);
    console.log("New task added!")
}

function editTask(taskId: string, taskName: string): void {
    
    const taskIndex: number = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1){
        console.log(`Can't find a task with ID ${taskId}.`);
    }else {
        tasks[taskIndex]!.name = taskName;
        console.log("Task edited!");
    }
}

function removeTask(taskId: string): void {
    
    const taskIndex: number = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1){
        console.log(`Can't find a task with ID ${taskId}.`);
    }else {
        tasks.splice(taskIndex, 1);
        console.log("Task remove!");
    }
}

function markTaskAsDone(taskId: string): void {
    
    const taskIndex: number = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1){
        console.log(`Can't find a task with ID ${taskId}.`);
    }else {
        tasks[taskIndex]!.done = true;
        console.log("Task marked as done!");
    }
}

function displayTasks(): void {
    
    if (tasks.length === 0) {
        console.log("No tasks found!");
    } else {
        console.log("  ID | Task | Status  ");
        console.log("----------------------");

        tasks.forEach(task => {
            console.log(`  ${task.id} | ${task.name} | ${task.done ? "done" : "not done"}  `);
        });
    }
}

function getTaskName(): string {
    let taskName = prompt("Enter the task: ");

    while (typeof taskName !== 'string') {
        taskName = prompt("Enter a valid task: ");
    }

    return taskName;
}

function getTaskId(): string {
    let taskId = prompt("Enter the task's id: ");

    while (typeof taskId !== 'string') {
        taskId = prompt("Enter a valid task id: ");
    }

    return taskId;
}

function program(i: number | string | null): void {
    if (typeof i === "string") {
        switch (i.toLowerCase()) {
            case 'display':
                displayTasks();
                break;
            case '1':
                displayTasks();
                break;
            case 'add':
                addTask(getTaskName());
                break;
            case '2':
                addTask(getTaskName());
                break;
            case 'edit':
                editTask(getTaskId(), getTaskName());
                break;
            case '3':
                editTask(getTaskId(), getTaskName());
                break;
            case 'mark':
                markTaskAsDone(getTaskId());
                break;
            case '4':
                markTaskAsDone(getTaskId());
                break;
            case 'remove':
                removeTask(getTaskId());
                break;
            case '5':
                removeTask(getTaskId());
                break;
            default:
                console.log('Please enter a valid operation from the list!')
                break;
        }
    }
}


console.log(`Welcome to the To-do List, here is how to use it.`);
console.log(
    `1 or display: Displays all the tasks.\n`
    + `2 or add: Adds a new task.\n`
    + `3 or edit: Edits an existing task.\n`
    + `4 or mark: Marks an existing task as done.\n`
    + `5 or remove: Removes an existing task.\n`
    + `0 or exit: Stops the programs.`
);

let i = prompt("Enter an operation: ");

while (i !== "exit" && i !== '0') {
    program(i);
    i = prompt("Enter an operation: ");
}