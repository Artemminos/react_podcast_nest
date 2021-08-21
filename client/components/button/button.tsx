import React from 'react';

interface ButtonProps {
    color: string;
    text?: string;
    type?: string;
}

const Button: React.FC<ButtonProps> = ({color, text = '', type = ''}) => {
    return (
        <>
            <button className={`button ${type} ${color}`}>{text}</button>
        </>
    );
};

export default Button;