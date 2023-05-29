import { useState, useEffect, useRef } from 'react';
import { item } from '../AddItem/Additem';

interface Props {

    CategoryList: item[]
    value:string
    name:string
    onchange:any
}

export default function Select({ CategoryList,value,name,onchange}: Props) {


    return (
<div className="form-group">
    <label htmlFor="SelectCategory">ItemsList</label>
        <select className="form-select" id='SelectCategory' value={value} name={name} onChange={onchange}>
            <option selected>Select Category</option>
            {
                CategoryList.filter((item,index,self)=>
                index===self.findIndex((i)=>(
                    i.category===item.category
                ))).map((selected, index) =>

                    <option key={index} value={selected.category}>{selected.category}</option>
                )
            }

        </select>
        </div>

    )


}