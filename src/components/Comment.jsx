
import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://s3-alpha-sig.figma.com/img/1afa/bda4/0b7ca842e82cf6faa6aac8e2c9970d59?Expires=1704672000&Signature=mAODzrW4mDTuvmGT9TOqsASICFwnWcoolpfcgOdgpLLsYRt2jjRDoeSmt8IGJ0oTs9mHwo4yCDm0nG4mtWzDCnipddIJ56NJdVShZi0YZPWYpm~OPU2PdUavmHPPSYZX6f6gbqeJk8b-P2Ky5nY0tWF3TLtSp3Haz4GQbYqM6Y4WxBRCnrUFU49~rOcinD4my2AnW3eAVwIkVzvIuLsluAcpG5-3d3sAIeF2lcXLnKzC7ejw8cgtUZc2o9zYiCMr-vmOVTDLsV9o2LYv2FacH8b0hBEWKeWVKX8V~RuJrh89veGoUv9je0yh3EBskF7a4OZJpqIbzHT1OUR~Oz9oPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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