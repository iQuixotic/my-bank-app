import * as React from "react";
import './style.css';

interface IProps {
    itype: string,
    label: string,
    labelfor: string,
    required?: boolean
}

const Input = (props: IProps) => {
    let inputElement = null;

    switch (props.itype) {
        case ('input'):
            inputElement = <input type='text' placeholder={props.label} required={true} name={props.labelfor} className='Input-Element' {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea name={props.labelfor} className='Input-Element' {...props}/>
            break;
        case ('radio'):
            inputElement = <input type='radio' className='Input-Element' {...props}/>
            break;
        case ('checkbox'):
            inputElement = <input type='checkbox' className='Input-Element' {...props}/>
            break;
        default:
    inputElement = <input className='Input-Element' {...props} />
    }

        return(
            <div id='Input'>
                {inputElement}
                <label className='Label' htmlFor={props.labelfor}>{props.label}</label>
            </div>
        );
}

export default Input;