import logo from './assets/logo.svg'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './app.module.css'
import { Content } from './components/content'
import './global.css'

export function App() {
  return (
    <div>
      <aside className={styles.logoContainer}>
        <img
          src={logo}
          alt="Um foguete com tons de azul e ao lado escrito todo"
        />
      </aside>
      <main className={styles.mainContent}>
        <form>
          <div className={styles.inputWrapper}>
            <input placeholder="Adicione uma nova tarefa" type="text" />
            <button type="submit">
              Criar <PlusCircle size={21} />
            </button>
          </div>
        </form>
        <Content />
      </main>
    </div>
  )
}
