import * as React from 'react';

interface Props{
    button:string,
    children:React.ReactNode
    onclick:any
}


export default function Button({children,button,onclick}:Props){

    return(

        <div className={`btn btn-${button} m-2`} onClick={onclick}>
{children}
        </div>
    )
} 