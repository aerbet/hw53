import React from 'react';
import CheckBox from './CheckBox';

interface TasksListProps {
    text: string;
    image: string;
    id: string;
    onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
    check: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TasksList: React.FC<TasksListProps> = props => {
    return (
        <div className="task">
            <div className='task-text'>{props.text}
                <CheckBox check={props.check} />
                <img
                    className="btn-dlt"
                    alt='deleteBtn'
                    src={props.image}
                    id={props.id}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
};

export default TasksList;