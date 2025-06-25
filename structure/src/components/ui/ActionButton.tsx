import type React from "react"
import styles from "./actionButtom.module.css"

interface ActionButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
}

export default function ActionButton({
  children,
  onClick,
  variant = "secondary",
  disabled = false,
}: ActionButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
