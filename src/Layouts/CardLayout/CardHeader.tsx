import * as React from 'react';


interface Props {
    children: React.ReactNode,
    classHeader:string
}

export default function CardHeader({children,classHeader}:Props) {


    return (
        <div className={`card-header ${classHeader}`}>
            {children}
        </div>
    )
}