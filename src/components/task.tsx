import { Trash } from '@phosphor-icons/react'
import { MouseEventHandler } from 'react'
import { CheckBoxIcon } from './icons/checkbox'
import styles from './task.module.css'

interface TasksProps {
  content: string
  isCompleted?: boolean
  onClick: MouseEventHandler<HTMLDivElement>
  handleDeleteTask: () => void
}

export function Task({
  content,
  isCompleted,
  onClick,
  handleDeleteTask,
}: TasksProps) {
  return isCompleted ? (
    <div
      className={styles.taskWrapper}
      style={{ opacity: '0.7', textDecoration: 'line-through' }}
      onClick={onClick}
    >
      <button title="Concluir tarefa">
        <CheckBoxIcon isChecked />
      </button>

      <span>{content}</span>
      <button title="Deletar tarefa">
        <Trash size={21} />
      </button>
    </div>
  ) : (
    <div className={styles.taskWrapper} onClick={onClick}>
      <button title="Concluir tarefa">
        <CheckBoxIcon isChecked={false} />
      </button>

      <span>{content}</span>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={21} />
      </button>
    </div>
  )
}
