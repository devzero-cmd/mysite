import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Build smarter solutions <br className='sm:block hidden'/>in a few strategic steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MIKIRO delivers research-driven, AI-powered systems designed to optimize
          operations, enhance decision-making, and accelerate growth through scalable
          and secure technology.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='technology'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
