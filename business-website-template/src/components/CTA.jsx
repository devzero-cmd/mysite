import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative`}>
      
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
          Empower your business today <br className='sm:block hidden'/> and explore innovation beyond payments
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We accept payments via cards, GCash, and all major wireless payment options, 
          making transactions seamless for your business. Dive deeper into our Research & Development initiatives to see how MIKIRO is pushing the boundaries of cybernetics and AI.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-5 sm:mt-0`}>
        <Button />
      </div>

      {/* Optional subtle divider to lead into R&D section */}
      <div className='absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-6 rounded-full'></div>
    </section>
  )
}

export default CTA
