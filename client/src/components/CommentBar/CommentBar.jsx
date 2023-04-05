import React from 'react'
import c from './CommentBar.module.scss'
import {TiDeleteOutline} from 'react-icons/ti'
import {AiOutlineSend} from 'react-icons/ai'
const CommentBar = ({title,handleClick}) => {
  return (
    <div className={c.commentBar__wrapper}>
        <div className={c.Comment__Bar}>
            <div className={c.title}>
                <TiDeleteOutline className={c.chat__closeBtn}  onClick={handleClick}/>
                <div className={c.chat__Name}><p>{title}</p></div>
            </div>
            <div className={c.comment__body}>
                <p>
                    No comments
                </p>
            </div>
            <div className={c.comment__send__wrpper}>
                <textarea className={c.textarea} placeholder='type your opinion'>

                </textarea>
                <button className={c.commentBtn}><AiOutlineSend/></button>
            </div>
        </div>
    </div>
   
  )
}

export default CommentBar