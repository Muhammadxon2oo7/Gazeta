import React, { useState } from 'react'
import c from "./Login.module.scss"
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import showPwdImg from '../../Assets/img/show__password.svg'
import hidePwdImg from '../../Assets/img/hide__password.svg';

const Login = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <div className={c.login__wrapper}>

            <div className={c.login__logo__wrapper}>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className={c.login__form__wrapper}>
                <div className={c.login__title}>
                    <p>Login to E-investment</p>
                </div>
                <form action="" className={c.login__from}>
                    <input id='email' type="email" className={c.login__form__input__email} placeholder="type your email" required />
                    <div className={c.login__form__input__password__wrapper}>
                        <input name="pwd"
                            placeholder="Enter Password"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)} required />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    </div>
                    <button type='submit' className={c.login__submit__btn}>Log in</button>
                    <p className={c.select__login__form__or}>or</p>
                    <a href="#" className={c.login__with__google}>
                        <FcGoogle />log in with  Google
                    </a>
                    <a href="#" className={c.login__with__google}>
                        <FaApple />log in with  Apple
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login