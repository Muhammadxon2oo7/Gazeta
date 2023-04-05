import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Backtotop from '../../components/BacktoTop/Backtotop'
import c from "./Home.module.scss"
import Main from '../../components/Main/Main'
const Home = () => {
  const [isbacktotop, setIsbacktotop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 220 ? setIsbacktotop(true) : setIsbacktotop(false);
  };
  return (
    <div className={c.Home}>
      <Header />
      <Main/>
      {isbacktotop && (<Backtotop />)}
      <Footer />
    </div>

  )
}

export default Home