import * as React from 'react';


interface Props {

    inputname: string,
    label: string,
    placeholder: string
    value: any
    onchange: any
    type: string
}

export default function FormGroup({ inputname, label, placeholder, value, onchange, type }: Props) {


    return (

        <div className="form-group ">
            <label htmlFor={inputname}>{label}</label>
            <input type={type} className="form-control" placeholder={placeholder} value={value} aria-label={inputname} name={inputname} aria-describedby="basic-addon1" onChange={onchange} />

        </div>
    )
}