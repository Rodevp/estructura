import { useState } from "react"
import styles from "./app.module.css"
import QueueVisualizer from "./components/qeue/QueueVisualizer"
import StackVisualizer from "./components/stack/StackVisualizer"

export default function App() {
  const [currentView, setCurrentView] = useState<"queue" | "stack">("stack")

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
        </div>
      </header>
      <main className={styles.main}>
        {currentView === "stack" ? <StackVisualizer /> : <QueueVisualizer />}
      </main>
    </div>
  )
}
