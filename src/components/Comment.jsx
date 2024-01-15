
import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

export function Comment() {
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
                <button title="Deletar comentário">
                  <Trash size={24}/>
                </button>
              </header>
              <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
              <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
              </button>
            </footer>
          </div>
    </div>
  )
}