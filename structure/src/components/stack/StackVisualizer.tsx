import { useState } from "react"
import styles from "./stack.module.css"
import ActionButton from "../ui/ActionButton"

export default function StackVisualizer() {

  const [stack, setStack] = useState<number[]>([])

  const pushStack = () => {
    const newItem = [...stack].length + 1 
    setStack([...stack, newItem])
  }

  const popStack = () => {
    setStack([...stack].slice(0, -1))
  }

  const mockStack = [1, 2, 3, 4, 5]
  const mockSize = 4
  const mockNextValue = 5

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Pila</h2>
          <p className={styles.size}>Tamaño: {stack.length}</p>
          <p className={styles.description}>Last In, First Out (LIFO)</p>
        </div>

        <div className={styles.stackContainer}>
          <div className={styles.stack}>
            {stack.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`${styles.stackItem} ${index === stack.length - 1 ? styles.topItem : ""}`}
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
          <ActionButton onClick={() => { pushStack() }} variant="primary">
            Push ({stack.length + 1})
          </ActionButton>
          <ActionButton onClick={() => {  popStack() }}>Pop</ActionButton>
          <ActionButton onClick={() => {  setStack([]) }} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
