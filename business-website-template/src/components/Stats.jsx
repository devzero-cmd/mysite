import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-10`}>
      {stats.map((stat) => (
        <div key={stat.id} className='flex-1 flex flex-col justify-center items-start m-4'>
          <h4 className='font-poppins font-bold xs:text-[40px] text-[32px] xs:leading-[53px] leading-[45px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient mt-2'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
