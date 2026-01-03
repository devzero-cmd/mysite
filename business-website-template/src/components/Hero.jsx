import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../style';
import { robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      {/* Metadata for SEO and JSON-LD */}
      <Helmet>
        <title>MIKIRO | Advanced Research & Development Company</title>
        <meta
          name="description"
          content="MIKIRO leverages cutting-edge AI and advanced technologies to deliver innovative solutions across multiple industries. We specialize in intelligent systems, automation, and data-driven research to empower businesses to scale efficiently."
        />
        <meta
          name="keywords"
          content="MIKIRO, AI research, advanced technology, intelligent systems, automation, R&D company, business solutions, innovation"
        />
        <meta name="author" content="MIKIRO Advanced Research Company" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MIKIRO",
            "url": "https://www.mikiro.com",
            "logo": "https://www.mikiro.com/logo.png",
            "description": "MIKIRO leverages cutting-edge AI and advanced technologies to deliver innovative solutions across multiple industries. We specialize in intelligent systems, automation, and data-driven research to empower businesses to scale efficiently.",
            "sameAs": [
              "https://www.linkedin.com/company/mikiro",
              "https://twitter.com/mikiro"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+63-123-456-7890",
              "contactType": "customer support",
              "email": "info@mikiro.com"
            },
            "potentialAction": {
              "@type": "Action",
              "name": "View Products",
              "target": "https://www.mikiro.com#products"
            }
          }
          `}
        </script>
      </Helmet>

      {/* LEFT SIDE TEXT */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        {/* MAIN HEADING */}
        <h1 className='font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mb-4'>
          MIKIRO
        </h1>

        <h2 className='font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[45px] mb-6'>
          Advanced Research & Development Company
        </h2>

        {/* DESCRIPTION */}
        <p className={`${styles.paragraph} max-w-[500px] leading-relaxed mb-8`}>
          At MIKIRO, we leverage cutting-edge AI and advanced technologies to deliver innovative solutions across multiple industries. 
          Our expert team specializes in intelligent systems, automation, and data-driven research to create tools that empower businesses to scale efficiently.
        </p>

        {/* CALL TO ACTION BUTTON */}
        <div className="mt-4">
          <GetStarted target="#products" text="View Products" />
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='MIKIRO Technology'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

    </section>
  );
};

export default Hero;
