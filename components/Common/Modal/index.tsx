import { useState } from 'react'

import styles from './index.module.scss'

export default function Accordion ({ name, children }:any):JSX.Element {
  const [textIsOpen, setTextIsOpen] = useState(false)
  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }
  const closeText = () => {
    setTextIsOpen(false)
  }

  return (
    <>
      <div className={textIsOpen ? styles.open : styles.close}>
        <h3 className={styles.heading}>
          <button onClick={toggleText}>
            {name}
          </button>
        </h3>
        <div className={styles.modalInner} onClick={closeText}>
          <div className={styles.textInner}>{children}</div>
        </div>
      </div>
    </>
  )
}
