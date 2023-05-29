import * as React from 'react';

interface Props{
    children:React.ReactNode;
  
}

export default function Table({children}:Props){


    return(
        <table className='table table-hover  customerTable'>
            
                            
                             {children}
                          

        </table>
    )
}