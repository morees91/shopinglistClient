import * as React from 'react';


interface Props{
    children:React.ReactNode,
    ClassName:string

}



export default function Row({children,ClassName}:Props){



    return(
        <div className={`row p1 ${ClassName}`}>
            {children}
        </div>
    )
}