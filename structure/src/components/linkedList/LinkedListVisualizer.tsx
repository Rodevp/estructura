import { useState } from "react"
import styles from "./linkedListVisualizer.module.css"
import ActionButton from "../ui/ActionButton"

class Node {
  id: number
  value: number
  next: Node | null
  constructor(id: number, value: number, next: Node | null) {
    this.id = id
    this.value = value
    this.next = next
  }
}

class LinkedList {
  head: Node | null
  tail: Node | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  add(value: number) {
    const newNode = new Node(this.size + 1, value, null)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  remove(id: number) {
    if (this.head === null) {
      return
    }
    if (this.head.id === id) {
      this.head = this.head.next
      this.size--
      return
    }
    let current = this.head
    while (current.next !== null) {
      if (current.next.id === id) {
        current.next = current.next.next
        this.size--
        return
      }
      current = current.next
    }
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

}

export default function LinkedListVisualizer() {

  const [list, setList] = useState<LinkedList>(new LinkedList())

  const addList = () => {

    const newList = new LinkedList()

    let current = list.head
    while (current !== null) {
      newList.add(current.value)
      current = current.next
    }

    newList.add(Math.floor(Math.random() * 100))

    setList(newList)
  }
  const remove = () => {

    const newList = new LinkedList()

    let current = list.head
    while (current !== null) {
      newList.add(current.value)
      current = current.next
    }

    const randomIndex = Math.floor(Math.random() * newList.size)
    newList.remove(randomIndex)

    setList(newList)

  }
  const clear = () => {
    const newList = new LinkedList()
    newList.clear()
    setList(newList)
  }

  const viewItemOfList = () => {

    let current = list.head
    const array = []

    while (current !== null) {
      console.log(current)
      array.push({
        id: current.id,
        value: current.value,
        next: current.next ? current.next.value : null
      })
      current = current.next
    }

    const view = array.map((node, index) => (
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
      </div>))

    return view

  }

  return (
    <div className={styles.container}>
      <div className={styles.visualizer}>
        <div className={styles.info}>
          <h2 className={styles.title}>Lista simplemente enlazada</h2>
          <p className={styles.size}>Tamaño: {list.size}</p>
          <p className={styles.description}>Lidta dinamica basada en nodos</p>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.list}>
            {viewItemOfList()}
          </div>
        </div>

        <div className={styles.controls}>
          <ActionButton onClick={() => {
            addList()
          }} variant="primary">
            Add
          </ActionButton>
          <ActionButton onClick={() => {
            remove()
          }}>Remove Item</ActionButton>
          <ActionButton onClick={() => {
            clear()
          }} variant="danger">
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
