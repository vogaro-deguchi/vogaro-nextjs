import styles from './index.module.scss'

export default function Button (props:any):JSX.Element {
  return (
    <a className={styles.view} href="">{props.text}<span></span></a>
  )
}
