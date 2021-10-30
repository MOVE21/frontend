import React from "react";

interface IDefInput{
    placeholder:string
    onChange: (text:string) => void
    value: string
    class?: string
}

export const DefaultInput: React.FC<IDefInput> = (props) =>{
    return(
        <input
        value={props.value}
        onChange={(e:any)=>props.onChange(e.target.value)}
        placeholder={props.placeholder}
        className={ props.class == undefined? "": "" + " "+ props.class}
        >
        
        </input>
    )
}