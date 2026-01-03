import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'

// Import HelmetProvider from react-helmet-async
import { HelmetProvider } from 'react-helmet-async'

const App = () => {
  return (
    <HelmetProvider>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>      
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>     
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
