import * as React from 'react';

interface Props{
    children:React.ReactNode
}


export default function Navbar({children}:Props){


    return(
     
        
        <nav className='navbar navbar-expand-md navbar-dark bg-primary rounded '>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-start col-md">
{children}
            </ul>





        </div>


    </nav>
    )
}