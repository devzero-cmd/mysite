import React from 'react';
import { apple, google } from '../assets'; // Keep your store icons
import styles, { layout } from '../style';

// Placeholder images (replace with actual images later)
const placeholderImages = {
  core: 'https://i.postimg.cc/85bnv0gV/edited-photo.png',
  seb: 'https://i.postimg.cc/zvWxFzQj/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post.png',
  als: 'https://i.postimg.cc/HnH63DC1/Blue-Purple-Futuristic-Modern-Hologram-3D-How-To-Search-Bar-Tech-Instagram-Post.png',
};

const products = [
  {
    id: 1,
    img: placeholderImages.core,
    title: 'CORE – Computerized Ocular Recognition Engine',
    description: `CORE is an advanced AI-powered classroom monitoring solution that leverages pre-orbital ocular recognition to accurately identify students. It seamlessly integrates facial recognition attendance, QR-based logging for absent students, and comprehensive reporting capabilities. The system supports a full-featured web dashboard with exportable Excel reports, providing educators with actionable insights in real-time.`,
    stores: [apple, google],
  },
  {
    id: 2,
    img: placeholderImages.seb,
    title: 'SEB – Secure Exam Browser',
    description: `SEB is a state-of-the-art examination monitoring platform designed to uphold academic integrity. Utilizing sophisticated facial recognition and eye-gaze tracking models, SEB detects unauthorized behaviors, mouth movements, and background audio anomalies. Results and analytics are instantly accessible through a secure, dedicated admin dashboard, ensuring seamless oversight of remote and in-person examinations.`,
    stores: [apple, google],
  },
  {
    id: 3,
    img: placeholderImages.als,
    title: 'ALS – Automated Library System',
    description: `ALS is a cutting-edge AI-driven library management solution that intelligently organizes books, streamlines check-in and check-out processes, and enhances user authentication via ID, OTP, and facial recognition. ALS enables libraries to optimize inventory management while delivering a secure, automated, and highly efficient user experience.`,
    stores: [apple, google],
  },
];

const Billing = () => {
  return (
    <>
      {products.map((product, index) => (
        <section key={product.id} className={index % 2 === 0 ? layout.sectionReverse : layout.section}>
          <div className={index % 2 === 0 ? layout.sectionImgReverse : layout.sectionImg}>
            <img
              src={product.img}
              alt={product.title}
              className='w-full max-w-[600px] h-auto object-contain relative z-[5] rounded-xl shadow-lg'
            />
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>{product.title}</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{product.description}</p>
            <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
              {product.stores.map((store, i) => (
                <img
                  key={i}
                  src={store}
                  alt='store'
                  className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Billing;
