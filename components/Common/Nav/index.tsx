import Link from 'next/link'

import styles from './index.module.scss'

export default function Nav () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li><Link href="about">Who We Are</Link></li>
        <li><Link href="services">Services</Link></li>
        <li><Link href="projects">Projects</Link></li>
        <li><Link href="news">News</Link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
