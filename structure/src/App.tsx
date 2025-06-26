import { useState } from "react"
import styles from "./app.module.css"
import QueueVisualizer from "./components/qeue/QueueVisualizer"
import StackVisualizer from "./components/stack/StackVisualizer"
import LinkedListVisualizer from "./components/linkedList/LinkedListVisualizer"

type OPTION_VALUES = "queue" | "stack" | "linkedlist"
export default function App() {
  const [currentView, setCurrentView] = useState<OPTION_VALUES>("stack")

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Estructura de datos</h1>
        <div className={styles.switcher}>
          <button
            className={`${styles.switchButton} ${currentView === "stack" ? styles.active : ""}`}
            onClick={() => setCurrentView("stack")}
          >
            Stack
          </button>
          <button
            className={`${styles.switchButton} ${currentView === "queue" ? styles.active : ""}`}
            onClick={() => setCurrentView("queue")}
          >
            Queue
          </button>
          <button
            className={`${styles.switchButton} ${currentView === "linkedlist" ? styles.active : ""}`}
            onClick={() => setCurrentView("linkedlist")}
          >
            Linked List
          </button>
        </div>
      </header>
      <main className={styles.main}>
        {currentView === "stack" && <StackVisualizer /> }
        {currentView === "queue" && <QueueVisualizer />}
        {currentView === "linkedlist" && <LinkedListVisualizer />}
      </main>
    </div>
  )
}
