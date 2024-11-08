import { PlusCircle } from '@phosphor-icons/react'
import { Content } from './components/content'

import logo from './assets/logo.svg'

import { Dispatch, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './app.module.css'
import './global.css'

interface TasksTypes {
  id: string
  content: string
  isCompleted: boolean
}

export interface TasksProps {
  tasks: TasksTypes[]
  setTasks: Dispatch<React.SetStateAction<TasksTypes[]>>
}

export function App() {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content: 'Estudar para português',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      content: 'Estudar javascript',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      content: 'Alimentar o cachorro',
      isCompleted: true,
    },
  ])

  function handleCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    taskName === ''
      ? alert('Insira algum nome.')
      : setTasks([
          ...tasks,
          {
            id: uuidv4(),
            content: taskName,
            isCompleted: false,
          },
        ])
  }

  return (
    <div>
      <aside className={styles.logoContainer}>
        <img
          src={logo}
          alt="Um foguete com tons de azul e ao lado escrito todo"
        />
      </aside>
      <main className={styles.mainContent}>
        <form onSubmit={handleCreateNewTask}>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Adicione uma nova tarefa"
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
              required
            />
            <button type="submit">
              Criar <PlusCircle size={21} />
            </button>
          </div>
        </form>

        <Content tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  )
}
