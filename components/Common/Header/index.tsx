import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Logo from '@/components/Common/Header/Logo'
import Nav from '@/components/Common/Header/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}