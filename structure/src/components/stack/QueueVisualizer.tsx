import styles from "./QueueVisualizer.module.css"
import ActionButton from "../ui/ActionButton"

export default function QueueVisualizer() {

  const mockQueue = [1, 2, 3, 4]
  const mockSize = 4
  const mockNextValue = 5

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Queue</h2>
          <p className={styles.size}>Size: {mockSize}</p>
          <p className={styles.description}>First In, First Out (FIFO)</p>
        </div>

        <div className={styles.queueContainer}>
          <div className={styles.labels}>
            <span className={styles.frontLabel}>Front</span>
            <span className={styles.rearLabel}>Rear</span>
          </div>
          <div className={styles.queue}>
            {mockQueue.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`${styles.queueItem} ${
                  index === 0 ? styles.frontItem : ""
                } ${index === mockQueue.length - 1 ? styles.rearItem : ""}`}
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
            Enqueue ({mockNextValue})
          </ActionButton>
          <ActionButton onClick={() => {}}>Dequeue</ActionButton>
          <ActionButton onClick={() => {}} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
