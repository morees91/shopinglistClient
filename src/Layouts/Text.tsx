import * as React from 'react';


interface Props {
    children: React.ReactNode,

}

export default function Text({children}:Props) {


    return (
        <h3>
            {children}
        </h3>
    )
}