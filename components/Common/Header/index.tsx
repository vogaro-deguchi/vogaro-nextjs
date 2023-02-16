import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Burger from '@/components/Common/Header/Burger'
import Logo from '@/components/Common/Header/Logo'
import Nav from '@/components/Common/Nav'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Container>
          <Burger></Burger>
        </Container>
      </div>
    </header>
  )
}
