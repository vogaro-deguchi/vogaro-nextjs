import Image from 'next/image'

import styles from './index.module.scss'
import Container from '@/src/components/Common/Container'
import Box from '../ProjectBox'


export default function Project (props:any): JSX.Element {
  return (
    <>
      <div className={styles.boxWrap}>
        {props.children}
      </div>
    </>
  )
}
