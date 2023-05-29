import * as React from 'react';


interface Props {
    children: React.ReactNode,
    classBody:string
}

export default function CardBody({children,classBody}:Props) {


    return (
        <div className={`card-body ${classBody}`}>
            {children}
        </div>
    )
}