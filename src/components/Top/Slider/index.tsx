'use client'

import styles from './index.module.scss'

import Image from 'next/image'
import Link from 'next/link'

//@ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/css'

export default function Slider() {
  return (
    <>
      <Splide
        className={styles.splide}
        hasTrack={ false }
        aria-label=""
        options={{
          type : 'loop',
          autoplay: true,
          interval: 5000,
          speed: 2000,
          pagination: false,
          breakpoints: {
            767: {
              gap: 0,
            },
          }
        }}
      >
        <div className={styles.customWrapper}>
          <SplideTrack className={styles.splideTrack}>
                <SplideSlide className={styles.splideSlide}>
                  <Image
                    src='/assets/Top/mv_bg.png'
                    alt=""
                    objectFit="cover"
                    layout='fill'
                    priority
                  />
                </SplideSlide>
          </SplideTrack>
        </div>
      </Splide>
    </>
  )
}
