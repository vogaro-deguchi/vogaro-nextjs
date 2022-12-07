import styles from './index.module.scss'

import Container from '@/components/Common/Container'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <ul className={styles.menu}>
            <li className={styles.menu__title}>カテゴリから探す</li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
          </ul>
          <ul className={styles.menu}>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
            <li className={styles.menu__item}><a href="">スキンケア</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
