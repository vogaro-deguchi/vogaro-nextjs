import Image from 'next/image'

import styles from './index.module.scss'
import Container from '@/components/Common/Container'
import Project from './Project'
import Box from './Box'

export default function SecProject (): JSX.Element {
  return (
    <>
      <div className={styles.projectSec}>
        <Project
          title = "Service"
          desc = "Webサイト制作実績"
        >
          <Box 
            main = "テスト"
            image = 'website/detail01.jpg'
          />
        </Project>
        <Project
          title = "Advertising"
          desc = "Web広告施策実績"
        >
        </Project>
        <Project
          title = "Advertising"
          desc = "Web広告施策実績"
        >
        </Project>

      </div>
    </>
  )
}
