import * as React from 'react';
import { item } from '../AddItem/Additem';


interface Props{

categoryList:item[]
inputname: string,
label: string,
value: string
onchange: any
type: string


}


export default function InputList({categoryList,inputname,label,value,onchange,type}:Props){


    return(
    <div className="form-group ">
    <label htmlFor={inputname}>{label}</label>
    <input type={type} list="inputList" className="form-control" value={value} aria-label={inputname} name={inputname} aria-describedby="basic-addon1" onChange={onchange}/>
    <datalist id='inputList'>
        {
            categoryList.filter((item,index,self)=>
            index===self.findIndex((i)=>(
                i.category===item.category
            ))).map((item, index) =>
                <option key={index}>{item.category}</option>
            )
        }
    </datalist>
</div>
    )
}