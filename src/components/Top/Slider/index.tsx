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
          type : 'fade',
          autoplay: true,
          interval: 4000,
          speed: 2000,
          pagination: false,
          rewind: true,
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
                className={styles.splideImg}
                src='/assets/Top/mv_bg01.png'
                alt=""
                objectFit="cover"
                layout='fill'
                priority
              />
            </SplideSlide>
            <SplideSlide className={styles.splideSlide}>
              <Image
                className={styles.splideImg}
                src='/assets/Top/mv_bg02.png'
                alt=""
                objectFit="cover"
                layout='fill'
                priority
              />
            </SplideSlide>
          </SplideTrack>
          <div className={`${styles.splideArrows} splide__arrows`}>
              <div className={`${styles.splideArrowsInner} splide__arrows__inner`}>
                <button className={`${styles.splideArrowPrev} splide__arrow splide__arrow--prev`}>Prev</button>
                <button className={`${styles.splideArrowNext} splide__arrow splide__arrow--next`}>Next</button>
              </div>
            </div>
        </div>
      </Splide>
      <style>
        .is
      </style>
    </>
  )
}
