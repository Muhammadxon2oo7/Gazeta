import React, { useState } from 'react'
import c from './SigUp.module.scss'
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import showPwdImg from '../../Assets/img/show__password.svg'
import hidePwdImg from '../../Assets/img/hide__password.svg';
import axios from 'axios'

const SingUp = () => {
    const [userName, createUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()
    
    const post = { userName: userName,email:email,password:password }
    try {
      await axios.post('http://localhost:5000/register', post)
      .then((res)=>{
        if(res.data.user){
          console.log(res.data.user);
        }
        else if(res.data.errors1){
          //CHAQIRISH res.data.errors1.email
          //CHAQIRISH res.data.errors1.userName
          //CHAQIRISH res.data.errors1.password
          // hop ;
          setError(res.data.errors1)
          localStorage.setItem('email',res.data.errors1.email)
        }
      }).catch((err)=>{
        throw err
      })

    } catch (e) {
      alert(e)
    }
  }
  
  
    // const formData = new FormData();

    // const submitForm = async (e) => {
    //     e.preventDefault();
    //     const {password}=e.target
    //     formData.append("files", password.files[0]);
    //     console.log(formData)
    //     const res = await axios.post("http://localhost:4040/upload", formData);
    //     console.log(res);
    // }
    let checke=localStorage.getItem('email')
    function ishladiaaa(){
      let ishlachumo=checke
      return ishlachumo
    }
    let newcheck=''
    function newfun(){
    // checke?checke:console.log('ishlamadi') 
      if(checke){
        return newcheck = checke
        
      }else{
        console.log('ishladi')
      }
    }
    return (
        <div className={c.signup__wrapper}>
          
            <div className={c.signup__logo__wrapper}>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className={c.signup__form__wrapper}>
                <div className={c.signup__title}>
                    <p>Sign Up for your account</p>
                </div>
                <div>
                  <h1>
                  {
                    
                  }
                  </h1>    
                </div>
                {/* onSubmit={submitForm} */}
                <form onSubmit={onSubmit}  action="" className={c.signup__from}>
                    <input type="email" className={c.signup__form__input__email} name="email" placeholder="type your email" onChange={(event) => {
              setEmail(event.target.value)
            }}
            value={email}/>

                    <input type="text" className={c.signup__form__input__email} name="username" placeholder="type your username" onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}/>
                    <div className={c.signup__form__input__password__wrapper}>
                        <input name="password"
                            placeholder="Enter Password"
                            type='password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                              }}
                              value={password}
                        />
                        
                    </div>
                    
                    <button onSubmit={newfun}  type='submit' className={c.signup__submit__btn}>Sign Up</button>
                    <p className={c.select__signup__form__or}>or</p>
                    <a href="#" className={c.signup__with__google}>
                        <FcGoogle />Sign Up with  Google
                    </a>
                    <a href="#" className={c.signup__with__google}>
                        <FaApple />Sign Up with  Apple
                    </a>
                </form>
            </div>
        </div>
    )
}

export default SingUp