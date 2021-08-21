import React from 'react';

const Input = ({id,label,icon}:any) => {
    const [value,setValue] = React.useState<string>('')
    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return (
        <div className="input-container" >
            <input onChange={valueHandler} value={value} required type="text" id={id} className="input"/>
            <label className={`input__label ${icon}`} htmlFor={id}>{label}</label>
        </div>
    );
};

export default Input;