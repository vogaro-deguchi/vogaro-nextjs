import { useState } from 'react'
import Link from 'next/link'

import styles from './index.module.scss'

export default function Nav () {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <>
    <div className={(navIsOpen ? styles.open : styles.close)}>
      <button className={styles.btn} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={styles.drawer}>
        <li>
          <Link href="/" onClick={closeNav}>Top</Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>About</Link>
        </li>
        <li>
          <Link href="/work" onClick={closeNav}>Work</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
