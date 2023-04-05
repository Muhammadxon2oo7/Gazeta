import React from 'react'
import c from "./Main.module.scss"
import postInfo from "../../dummy-data-posts.json"
import Post from '../Posts/Post'
const Main = () => {
  return (
    <div className={c.main__wrapper}>
        {
            postInfo.map(postItems => 
            <Post key={1} image={postItems.img} title={postItems.title} dec={postItems.dec} wiewrs={postItems.wiewrs} like={postItems.like} comment={postItems.comment} time={postItems.time} />
            )
        }
    </div>
  )
}

export default Main