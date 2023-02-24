import styles from './index.module.scss'

import Container from '@/components/Common/Container'

export default function SecTitle (props:any): JSX.Element {
  return (
    <>
      <div className={styles.secTitle}>
        <Container>
          <h2 className={styles.secTitle__container}>
            <span className={styles.secTitle__title}>{props.title}</span>
            <span className={styles.secTitle__desc}>{props.desc}</span>
          </h2>
        </Container>
      </div>
    </>
  )
}
