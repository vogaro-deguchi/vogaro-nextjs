import styles from './index.module.scss'

export default function Nav () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>Who We Are</li>
        <li>Service</li>
        <li>Projects</li>
        <li>News</li>
        <li>Recruit</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
