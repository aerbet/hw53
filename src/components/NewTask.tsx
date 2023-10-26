import React from 'react';

interface NewTaskProps {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTask: React.FC<NewTaskProps> = props => (
    <div className="newTask">
        <input className="newInput" type="text" value={props.text} onChange={props.onChange} />
        <h3>{props.text}</h3>
    </div>
);

export default NewTask;