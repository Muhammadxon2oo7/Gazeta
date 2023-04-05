import React from 'react'
import { BsArrowUp } from "react-icons/bs"
import "./Backtotop.css"
const Backtotop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div onClick={scrollToTop} className='backtotop'><BsArrowUp className='backIcon' /></div>
  )
}

export default Backtotop