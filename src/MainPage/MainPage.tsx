import  React,{useEffect,useState} from 'react';
import Column from '../Layouts/Column';
import Navbar from '../Layouts/Navbar';
import Row from '../Layouts/Row';
import { Link,Outlet,useParams,NavLink  } from 'react-router-dom';
import Login from '../Login/Login';

export default function MainPage(){


    const [user,setuser]=useState(localStorage.getItem('user'))   

    return(
    <div className='container-fluid'>
    

{
    user!==null?

    <Row ClassName=''>
    <Column column=''>
        <Navbar>
            
        <li className="nav-item">
            <NavLink  to={'/Login'}  className={`nav-link `} end>Login</NavLink >
        </li>
        <li className="nav-item">
            <NavLink to={'/AddItem'}  className={`nav-link `} end>Add Item</NavLink>
        </li>

        <li className="nav-item">
            <NavLink to={'/ShopingList'}   className={`nav-link `} end>Shoping List</NavLink>
        </li>

        </Navbar>

        <Row ClassName=''>
            <Column column=''>
                <Outlet/>
            </Column>
        </Row>
    </Column>
</Row>

:

<Login/>
}

   
    
    </div>
    )
}