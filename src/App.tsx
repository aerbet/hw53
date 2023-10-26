import React, { useState } from 'react';
import TasksList from './components/TaskList';
import NewTask from './components/NewTask';
import './App.css';
import removeimg from './assets/removeimg.png';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([
        "Do push-ups",
        "Don't drink coffee",
        "Share your opinion"
    ]);
    const [newTaskText, setNewTaskText] = useState<string>("");

    const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    };

    const addNewTask = () => {
        if (newTaskText) {
            setTasks(prevTasks => [...prevTasks, newTaskText]);
            setNewTaskText("");
        }
    };

    const deleteTask = (event: React.MouseEvent<HTMLImageElement>) => {
        const id = parseInt(event.currentTarget.id, 10);
        setTasks(prevTasks => {
            const tasksCopy = [...prevTasks];
            tasksCopy.splice(id, 1);
            return tasksCopy;
        });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const message = event.target.checked ? "You've done it" : "Try next time";
        alert(message);
    };

    return (
        <div className="app">
            <NewTask
                text={newTaskText}
                onChange={handleTaskChange}
            />
            <button onClick={addNewTask}>Add Task</button>

            <div className="list-block">
                {tasks.map((task, key) => (
                    <TasksList
                        key={key}
                        id={key.toString()}
                        text={task}
                        onClick={deleteTask}
                        image={removeimg}
                        check={handleCheckboxChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;