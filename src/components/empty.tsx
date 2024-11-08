import clipboard from '../assets/icons/clipboard.svg'
import styles from './empty.module.css'

export function EmptyContent() {
  return (
    <div className={styles.contentWrapper}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
