import styles from "./stack.module.css"
import ActionButton from "../ui/ActionButton"

export default function StackVisualizer() {
  const mockStack = [1, 2, 3, 4, 5]
  const mockSize = 4
  const mockNextValue = 5

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Pila</h2>
          <p className={styles.size}>Tamaño: {mockSize}</p>
          <p className={styles.description}>Last In, First Out (LIFO)</p>
        </div>

        <div className={styles.stackContainer}>
          <div className={styles.stack}>
            {mockStack.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`${styles.stackItem} ${index === mockStack.length - 1 ? styles.topItem : ""}`}
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
          <ActionButton onClick={() => {}} variant="primary">
            Push ({mockNextValue})
          </ActionButton>
          <ActionButton onClick={() => {}}>Pop</ActionButton>
          <ActionButton onClick={() => {}} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
