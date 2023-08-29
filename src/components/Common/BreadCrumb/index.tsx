import Link from 'next/link'
import Container from '@/src/components/Common/Container';
import styles from './index.module.scss'

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
}

export default function BreadCrumb ({ lists }: Props):JSX.Element {
  return (
    <Container>
      <ul className={styles.breadCrumb}>
        {lists.map(({ name = 'ホーム', path = '/' }, index) => (
          <li key={index}>
            {lists.length - 1 !== index
              ? (
              <Link href={path} className={styles.next}>{name}</Link>
                )
              : (
              <span>{name}</span>
                )}
          </li>
        ))}
      </ul>
    </Container>
  )
}
