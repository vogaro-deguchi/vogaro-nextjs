import Link from 'next/link'

import styles from './index.module.scss'

import Burger from '@/components/Common/Header/Burger'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>スキンケア</li>
        <li>メイクアップ</li>
        <li>ヘア・ボディケア</li>
        <li>メンズコスメ</li>
        <li>健康食品</li>
        <li>その他・限定品</li>
      </ul>
      <ul className={styles.list}>
        <li>
        
        </li>
      </ul>
      <Burger />
    </nav>
  )
}