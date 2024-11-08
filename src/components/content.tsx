import { Task } from './task'

import { TasksProps } from '../app'
import styles from './content.module.css'
import { EmptyContent } from './empty'

export function Content({ tasks, setTasks }: TasksProps) {
  function handleTaskState(id: string) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutTheTask = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(tasksWithoutTheTask)
  }

  const allDoneTasks = tasks.filter((task) => task.isCompleted === true)

  return (
    <div className={styles.contentWrapper}>
      <header className={styles.tasksCount}>
        <div className={styles.counterWrapper}>
          <strong>Tarefas criadas</strong>
          <span>
            <strong>{tasks.length}</strong>
          </span>
        </div>
        <div className={styles.counterWrapper}>
          <strong>Concluídas</strong>
          <span>
            <strong>
              {allDoneTasks.length === 0
                ? '0'
                : `${allDoneTasks.length} de ${tasks.length}`}
            </strong>
          </span>
        </div>
      </header>
      <div className={styles.divisor} />

      {tasks.length === 0 ? (
        <EmptyContent />
      ) : (
        <div className={styles.tasksWrapper}>
          {tasks.map((task) => (
            <Task
              key={task.content}
              content={task.content}
              isCompleted={task.isCompleted}
              onClick={() => handleTaskState(task.id)}
              handleDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
