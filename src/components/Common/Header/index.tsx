import styles from './index.module.scss'
import Container from '@/src/components/Common/Container'
import Burger from '@/src/components/Common/Header/Burger'
import Logo from '@/src/components/Common/Header/Logo'
import Nav from '@/src/components/Common/Nav'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
          <Burger></Burger>
      </div>
    </header>
  )
}
