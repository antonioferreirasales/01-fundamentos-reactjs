import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1494515426402-f1980ace7a9c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img src="https://github.com/antonioferreirasales.png" />
        <strong>Antônio Sales</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#" target="_blank">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}