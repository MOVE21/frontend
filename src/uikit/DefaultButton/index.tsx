import React from "react";

interface IDefBtn{
    onClick: () => void
    class?:string;
}

export const DefaultButton: React.FC<IDefBtn> = (props) =>  {
    return(
        <button 
        className = {props.class == undefined? "" : "" + " " + props.class}
        onClick={()=>props.onClick()}
        >{props.children}</button>
    );
}