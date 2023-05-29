import { useEffect, useState } from 'react';
import Row from '../Layouts/Row';
import Column from '../Layouts/Column';
import Card from '../Layouts/CardLayout/Card';
import FormGroup from '../Layouts/FormGroup';
import InputList from '../Layouts/InputList';
import axios from 'axios';



export interface item {
  item_name: string,
  category: string,
  price: number,
  image: string
  item_id: number
}

export default function Additem() {
  const [image, setimage] = useState<any>()
  const [previewImage, setPreviewImage] = useState<string>("");
  const [message, setmessage] = useState("")
  const [categories, Setcatergories] = useState<item[]>([])
  const [item, setitem] = useState<item>({
    item_id: 0,
    item_name: "",
    category: "",
    price: 0,
    image: ""
  })



  useEffect(() => {


    Items()

  }, [])

  const Items = () => {


    axios.get('https://shoplistserver.onrender.com/items/Items')
      .then(res => {


        Setcatergories(res.data.items)
        console.log(res.data)
      })


  }


  const AddItem = () => {

    const formData = new FormData()
    formData.append('image', image)
    formData.append('item', JSON.stringify(item))


    axios.post('https://shoplistserver.onrender.com/items/AddItem', formData)
      .then(res => {

        if (res.data.status == 500) {

          setmessage(res.data.Message)
        } else {

          setmessage(res.data.Message)

          setTimeout(() => {


            ResetButton()




          }, 3000);


        }



      })

    console.log(item)

  }




  const ResetButton = () => {

window.location.reload()

  }
  const HandleInputsFile= (e: React.ChangeEvent<HTMLInputElement>) => {
  
    const imageinput = e.target.files as FileList;


    console.log(imageinput?.[0])
    setimage(imageinput?.[0])
    setPreviewImage(URL.createObjectURL(imageinput?.[0]));


  
  }


  const HandleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputs = e.target

    setitem({

      ...item,
      [inputs.name]: inputs.value
    })





  }


  return (

    <Row ClassName=''>
      <Column column=''>

        <Card
          headerText='Add item/Edit Item'
          ResetButton={() => ResetButton()}
          successButton={() => AddItem()}
          footerText={message}
          btnSuccessValue='Save'>
          <FormGroup inputname='item_name'
            label='item_name' type='text' onchange={HandleInputs}
            placeholder='Enter Item name' value={item.item_name} />

          <InputList categoryList={categories} inputname='category'
            label="category" onchange={HandleInputs} value={item.category} type='text' />

          <FormGroup inputname='price'
            label='price' type='number' onchange={HandleInputs}
            placeholder='Enter Pirce' value={item.price} />


<div className="form-group ">
            <label htmlFor={'image'}>{'image'}</label>
            <input type={'file'} className="form-control"  name={'image'}  onChange={HandleInputsFile} />

        </div>


          <img src={previewImage} />
        </Card>

      </Column>

    </Row>
  )
}