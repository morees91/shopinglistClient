import { useEffect, useState } from 'react';
import Row from '../Layouts/Row';
import Column from '../Layouts/Column';
import Card from '../Layouts/CardLayout/Card';
import Input from '../Layouts/Input';
import FormGroup from '../Layouts/FormGroup';
import axios from 'axios';
import Button from '../Layouts/button';
 

interface user{
  username:string,
  password:string
}


export default function Login(){

  const [user,setuser]=useState(localStorage.getItem('user'))
const[message,setmessage]=useState('')
  const [userInfo,setUserinfo]=useState<user>({
    username:"",
    password:""
  })

  

  useEffect(() => {

console.log(user)
  }, [])

  const Login=()=>{


    axios.post('http://localhost:3000/users/login',userInfo)
    .then(res =>{

      console.log(res.data)

      if(res.data.status==500)
      {

        setmessage(res.data.Message)

      }else{


        setmessage(res.data.Message)

        localStorage.setItem('user',JSON.stringify(userInfo))

        setTimeout(()=>{

          ResetButton()
          window.location.reload()

        },3000)

      }

    
    })

    console.log(userInfo)

  }
  const ResetButton=()=>{


    setUserinfo({
      username:"",
      password:""
    })


  }



  const HandleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const inputs = e.target


    setUserinfo({

      ...userInfo,
      [inputs.name]:inputs.value
    })
    //console.log(inputs.value)


}


const Logout=()=>{

localStorage.removeItem('user')

window.location.reload()



}

    return(

      <Row ClassName=''>
        {
          user!==null?

<Column column=''>
<div className='card'>
<div className='card-header'>Logout</div>
<div className='card-body'>
  <Button button='btn btn-danger' onclick={()=>Logout()}>Logout</Button>
</div>
</div>

</Column>


          :
<Column column=''>

<Card
headerText='Login'
footerText={message}
ResetButton={()=> ResetButton()}
  successButton={()=> Login()}
  btnSuccessValue='Login'>
<FormGroup inputname='username' 
label='UserName' type='text'  onchange={HandleInputs}
placeholder='Enter UserName'value={userInfo.username} />

<FormGroup inputname='password' 
label='password' type='text' onchange={HandleInputs}
placeholder='Enter password'value={userInfo.password} />

</Card>

</Column>
        }

      </Row>
    )
}