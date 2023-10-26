import React from 'react';

interface InputFormProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const InputForm: React.FC<InputFormProps> = props => {
    return (
        <div className="input_form">
            <form>
                <input type="text" onChange={props.onChange}/>
                <button className="btn-addTask" type="button" onClick={props.onClick}>Add Task</button>
            </form>
        </div>
    )
};

export default InputForm;