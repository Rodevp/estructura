import styles from "./linkedListVisualizer.module.css"
import ActionButton from "../ui/ActionButton"

export default function LinkedListVisualizer() {
  const mockNodes = [
    { id: 1, value: 10, next: 2 },
    { id: 2, value: 20, next: 3 },
    { id: 3, value: 30, next: 4 },
    { id: 4, value: 40, next: null },
  ]
  const mockSize = 4
  const mockNextValue = 50

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Lista simplemente enlazada</h2>
          <p className={styles.size}>Tamaño: {mockSize}</p>
          <p className={styles.description}>Lidta dinamica basada en nodos</p>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.list}>
            {mockNodes.map((node, index) => (
              <div key={node.id} className={styles.nodeContainer}>
                <div
                  className={`${styles.node} ${index === 0 ? styles.headNode : ""}`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className={styles.nodeValue}>{node.value}</div>
                  <div className={styles.nodePointer}>{node.next ? "→" : "∅"}</div>
                </div>
                {node.next && (
                  <div className={styles.arrow}>
                    <div className={styles.arrowLine}></div>
                    <div className={styles.arrowHead}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <ActionButton onClick={() => {}} variant="primary">
            Add ({mockNextValue})
          </ActionButton>
          <ActionButton onClick={() => {}}>Remove Head</ActionButton>
          <ActionButton onClick={() => {}} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
