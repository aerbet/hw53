import React from 'react';

interface CheckBoxProps {
    check: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
    return (
        <div className="checkBox">
            <input type="checkbox" onChange={props.check} />
        </div>
    )
};

export default CheckBox;