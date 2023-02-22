import Image from 'next/image'

import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Box from '../Box'


export default function Project (props:any): JSX.Element {
  return (
    <>
      <section className={styles.project}>
        <Container>
          <div>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.desc}>{props.desc}</p>
          </div>
        </Container>
        <div className={styles.boxWrap}>
          {props.children}
        </div>
      </section>
    </>
  )
}
