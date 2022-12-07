import styles from './index.module.scss'

import Link from 'next/link'

import Container from '@/components/Common/Container'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.culumn}>
            <ul className={styles.menu}>
              <li className={styles.menu__title}>カテゴリから探す</li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="/skincare">スキンケア</Link></li>
            </ul>
            <ul className={styles.menu}>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
            </ul>
          </div>
          <div className={styles.culumn}>
            <ul className={styles.menu}>
              <li className={styles.menu__title}>カテゴリから探す</li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
            </ul>
            <ul className={styles.menu}>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
              <li className={styles.menu__item}><Link href="">スキンケア</Link></li>
            </ul>
          </div>
          <div className={styles.culumn}>

          </div>
          <div className={styles.culumn}>

          </div>
          <div className={styles.culumn}>

          </div>
        </div>
      </Container>
    </footer>
  )
}
