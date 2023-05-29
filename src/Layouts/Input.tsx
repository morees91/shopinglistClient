import * as React from 'react';

interface Props{
    type:string,
    value:string,
    className:string
    ResetClick:any
}

export default function Input({type,value,className,ResetClick}:Props){


    return(
        <input type={type} value={value} className={`btn btn-${className}`} onClick={ResetClick} />
                                      
    )
}