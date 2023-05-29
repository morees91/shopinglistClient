import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { item } from '../AddItem/Additem';
import Card2 from '../Layouts/CardLayout/Card2';
import Table from '../Layouts/Table';
import Select from '../Layouts/Select';
import axios from 'axios';
import { Modal, Button, Form } from "react-bootstrap";


export default function Items() {


  const [ShopingList, setShopingList] = useState<item[]>([])
  const [Search, setSearch] = useState('')


useEffect(()=>{


  Items()

},[])


const HandleInputs = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const inputs = e.target


  setSearch(inputs.value)


  

  //console.log(inputs.value)


}





  const Items=()=>{


axios.get('http://localhost:3000/items/Items')
.then(res =>{


  setShopingList(res.data.items)
  console.log(res.data)
})


  }


  return (

    <Card2 headerText='Shoping List'>


<Select CategoryList={ShopingList} value={Search} name='search' onchange={HandleInputs} />


      <Table >
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">category</th>
            <th scope="col">price</th>
            <th scope="col">image</th>


          </tr>
        </thead>
        <tbody >
          {

            ShopingList.filter(item_search => Search===item_search.category).map((item, index) =>


              <tr key={index} className='table-row'>
                <td  >{item.item_name}</td>
                <td  >{item.category}</td>
                <td  >{item.price}</td>
                <td><img src={item.image} alt="..." className="w-25 p-3 rounded-circle"/></td>
              </tr>






            )
          }
        </tbody>
      </Table>

    </Card2>
  )
}