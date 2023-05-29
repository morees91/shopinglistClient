import * as React from 'react';

interface Props {
    column: string,
    children:React.ReactNode
}


export default function ({ column, children }: Props) {


    return (

        <div className={`col-md${column}`}>

            {children}
        </div>
    )
}