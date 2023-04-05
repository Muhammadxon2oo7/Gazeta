import React from 'react'
import c from "./Header.module.scss"
import logo from '../../Assets/img/texnomart-logo-removebg-preview.png'
const Header = () => {
  return (
    <div className={c.header__wrapper}>
      <div className={c.logo__wrapper}>
        <img src={logo} alt="" />
      </div>
      <div className={c.register__wrapper}>
        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  )
}

export default Header