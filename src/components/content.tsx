import { Task } from './task'

import styles from './content.module.css'

export function Content() {
  return (
    <div className={styles.contentWrapper}>
      <header className={styles.tasksCount}>
        <div className={styles.counterWrapper}>
          <strong>Tarefas criadas</strong>
          <span>
            <strong>0</strong>
          </span>
        </div>
        <div className={styles.counterWrapper}>
          <strong>Concluídas</strong>
          <span>
            <strong>0</strong>
          </span>
        </div>
      </header>
      <div className={styles.divisor} />
      <div className={styles.tasksWrapper}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}
