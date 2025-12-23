import React from 'react'
import styles from '../style'
import rdDemoVideo from '../assets/videos/rd-demo.mp4' // make sure the video is placed here

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-10 relative w-full`}>
      
      {/* Video Banner */}
      <div className='relative w-full max-w-[900px]'>
        <video
          src={rdDemoVideo}
          autoPlay
          loop
          muted
          playsInline
          className='w-full rounded-[20px] object-cover'
        />
        
        {/* Overlay Text */}
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <p className='text-white text-center text-[24px] sm:text-[32px] font-bold px-4'>
          </p>
        </div>
      </div>

    </section>
  )
}

export default Clients
