import { useState } from "react"
import styles from "./queue.module.css"
import ActionButton from "../ui/ActionButton"

export default function QueueVisualizer() {

  const [queue, setQueue] = useState<number[]>([])

  const enqueue = () => {
    const newItem = [...queue].length
    setQueue([...queue, newItem])
  }

  const deQueue = () => {
    setQueue([...queue].slice(1))
  }

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Cola</h2>
          <p className={styles.size}>Tamaño: {queue.length}</p>
          <p className={styles.description}>First In, First Out (FIFO)</p>
        </div>

        <div className={styles.queueContainer}>
          <div className={styles.queue}>
            {queue.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`${styles.queueItem} ${index === 0 ? styles.frontItem : ""
                  } ${index === queue.length - 1 ? styles.rearItem : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <ActionButton onClick={() => { enqueue() }} variant="primary">
            Enqueue ({queue.length + 1})
          </ActionButton>
          <ActionButton onClick={() => { deQueue() }}>Dequeue</ActionButton>
          <ActionButton onClick={() => { setQueue([]) }} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
