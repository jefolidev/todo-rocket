import { Circle, Trash } from '@phosphor-icons/react'
import styles from './task.module.css'

export function Task() {
  return (
    <div className={styles.taskWrapper}>
      <button title="Concluir tarefa">
        <Circle size={21} />
      </button>
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button title="Deletar tarefa">
        <Trash size={21} />
      </button>
    </div>
  )
}
