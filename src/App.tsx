import React, { Component } from 'react';
import TasksList from './components/TaskList';
import NewTask from './components/NewTask';
import './App.css';
import removeimg from './assets/removeimg.png'

interface State {
    tasks: string[];
    newTaskText: string;
}

class App extends Component<{}, State> {
    state: State = {
        tasks: [
            "Do push-ups",
            "Don't drink coffee",
            "Share your opinion"
        ],
        newTaskText: ""
    };

    handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newTaskText: event.target.value });
    };

    addNewTask = () => {
        if (this.state.newTaskText) {
            const tasksCopy = [...this.state.tasks, this.state.newTaskText];
            this.setState({ tasks: tasksCopy, newTaskText: "" });
        }
    };

    deleteTask = (event: React.MouseEvent<HTMLImageElement>) => {
        const id = parseInt(event.currentTarget.id, 10);
        const tasksCopy = [...this.state.tasks];
        tasksCopy.splice(id, 1);
        this.setState({ tasks: tasksCopy });
    }

    render() {
        return (
            <div className="App grid-container">
                <NewTask
                    text={this.state.newTaskText}
                    onChange={this.handleTaskChange}
                />
                <button onClick={this.addNewTask}>Add Task</button>

                <div className="list-block">
                    {this.state.tasks.map((task, key) => {
                        return (
                            <TasksList
                                key={key}
                                id={key.toString()}
                                text={task}
                                onClick={this.deleteTask}
                                image={removeimg}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;