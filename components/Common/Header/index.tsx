import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Logo from '@/components/Common/Header/Logo'
import Nav from '@/components/Common/Header/Nav'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.headerContent}>
            <Logo />
            <Nav />
          </div>
        </Container>
      </div>
    </header>
  )
}
