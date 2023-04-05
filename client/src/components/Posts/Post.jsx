import React,{useState} from 'react'
import {IoEyeSharp} from "react-icons/io5"
import {BiTime} from "react-icons/bi"
import {AiOutlineLike} from "react-icons/ai"
import {RiSendPlane2Fill} from "react-icons/ri"
import {BsChatText} from 'react-icons/bs'
import c from "./Post.module.scss"
import CommentBar from '../CommentBar/CommentBar'
const Post = ({image,title,dec,wiewrs,like,comment,time}) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };
  return (
    <div className={c.post__card}>
        <div className={c.post__card__img__wrapper}>
            <img src={image} alt="" />
        </div>
        <div className={c.post__info}>
            <div className={c.post__title}><p >{title}</p></div>
            <div className={c.post_dec}><p>{dec}</p><div className={c.post__like__wiewrs__time}>
                <div className={c.post__wiewrs}><p>{wiewrs} <IoEyeSharp/></p></div>
                <div className={c.post__time}>
                    <p>{time}<BiTime/></p>
                </div>
                <div className={c.post__like}>
                    <p>{like} <AiOutlineLike/></p>
                </div>
            </div>
            <div className={c.post__comment}>
                <textarea className={c.post__comment_textare} placeholder='enter your opinion' />
                <div className={c.sendBtn__comments}>
                    <p  onClick={handleClick}>more comments <BsChatText/></p>
                    {isShown && <CommentBar title={title} handleClick={handleClick} />}
                    <button className={c.post_sendBtn}>Send <RiSendPlane2Fill/></button>
                </div>
                
            </div></div>
            
        </div>
        
    </div>
  )
}

export default Post