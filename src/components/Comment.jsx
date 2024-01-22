
import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Devon Lane (você)</strong>
                  <time title="24 de dezembro às 16:26" dateTime="2023-12-24">Cerca de duas horas</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar comentário">
                  <Trash size={24}/>
                </button>
              </header>
              <p>{content}</p>
            </div>
            <footer>
              <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
              </button>
            </footer>
          </div>
    </div>
  )
}