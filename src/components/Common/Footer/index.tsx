import Image from 'next/image'

import styles from './index.module.scss'

import Link from 'next/link'

import Container from '@/src/components/Common/Container'

import footerLogo from './assets/ft_logo.png'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <Image
              src={footerLogo}
              alt=""
              width={100}
              height={130}
              objectFit="cover"
              priority
              placeholder='blur'
            />
            <div className={styles.footer__left__info}>
              <p>Vogaro株式会社（ヴォガロ株式会社）</p>
              <p>〒553-0003</p>
              <a className={styles.map} href="https://goo.gl/maps/XiVKCYeFuPWVxXmF8" target="_blank">大阪府大阪市福島区福島1-1-12 <span>堂島リバーフォーラム3F</span></a>
              <p>TEL : 06-6136-4035 / FAX : 06-6136-4036</p>
            </div>
          </div>
          <div className={styles.footer__right}>
              <ul>
                <li><a href="">プライバシーポリシー</a></li>
                <li><a href="">アクセス</a></li>
              </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
