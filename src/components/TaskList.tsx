import React from 'react';

interface TasksListProps {
    text: string;
    image: string;
    id: string;
    onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const TasksList: React.FC<TasksListProps> = props => {
    return (
        <div className="task">
            <div className='task-text'>{props.text}
                <img className="btn-dlt" alt='deleteBtn' src={props.image} id={props.id} onClick={props.onClick} />
            </div>
        </div>
    )
};

export default TasksList;