import React from "react";

interface ITextArea{
    placeholder?: string
    onChange: (text:string)=>void
    value?:string
    class?:string
}

export const TextArea:React.FC<ITextArea> = (props) => {
    return(
        <textarea
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e)=>props.onChange(e.target.value)}
        className={props.class == undefined? "":"" + " " + props.class}
        >

        </textarea>
    );
}