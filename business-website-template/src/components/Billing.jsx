import React from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ updated import
import { apple, google } from '../assets'; // Keep your store icons
import styles, { layout } from '../style';

// Products with direct image links and metadata
const products = [
  {
    id: 1,
    img: 'https://i.postimg.cc/85bnv0gV/edited-photo.png',
    title: 'CORE – Computerized Ocular Recognition Engine',
    description: `CORE is an advanced AI-powered classroom monitoring solution that leverages pre-orbital ocular recognition to accurately identify students. It seamlessly integrates facial recognition attendance, QR-based logging for absent students, and comprehensive reporting capabilities. The system supports a full-featured web dashboard with exportable Excel reports, providing educators with actionable insights in real-time.`,
    stores: [apple, google],
    metadata: {
      title: 'CORE – Computerized Ocular Recognition Engine | MIKIRO Advanced Research',
      description: 'CORE by MIKIRO Advanced Research Company is an AI-powered classroom monitoring solution with ocular recognition, attendance logging, and reporting.',
      keywords: 'CORE, AI classroom monitoring, ocular recognition, facial recognition, attendance system, MIKIRO Advanced Research',
      author: 'MIKIRO Advanced Research Company',
    },
  },
  {
    id: 2,
    img: 'https://i.postimg.cc/zvWxFzQj/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post.png',
    title: 'SEB – Secure Exam Browser',
    description: `SEB is a state-of-the-art examination monitoring platform designed to uphold academic integrity. Utilizing sophisticated facial recognition and eye-gaze tracking models, SEB detects unauthorized behaviors, mouth movements, and background audio anomalies. Results and analytics are instantly accessible through a secure, dedicated admin dashboard, ensuring seamless oversight of remote and in-person examinations.`,
    stores: [apple, google],
    metadata: {
      title: 'SEB – Secure Exam Browser | MIKIRO Advanced Research',
      description: 'SEB by MIKIRO Advanced Research Company is an AI-driven exam monitoring platform with facial recognition, eye-gaze tracking, and anomaly detection.',
      keywords: 'SEB, secure exam browser, AI exam monitoring, facial recognition, eye tracking, MIKIRO Advanced Research',
      author: 'MIKIRO Advanced Research Company',
    },
  },
  {
    id: 3,
    img: 'https://i.postimg.cc/HnH63DC1/Blue-Purple-Futuristic-Modern-Hologram-3D-How-To-Search-Bar-Tech-Instagram-Post.png',
    title: 'ALS – Automated Library System',
    description: `ALS is a cutting-edge AI-driven library management solution that intelligently organizes books, streamlines check-in and check-out processes, and enhances user authentication via ID, OTP, and facial recognition. ALS enables libraries to optimize inventory management while delivering a secure, automated, and highly efficient user experience.`,
    stores: [apple, google],
    metadata: {
      title: 'ALS – Automated Library System | MIKIRO Advanced Research',
      description: 'ALS by MIKIRO Advanced Research Company is an AI-powered library management system for secure, automated, and efficient operations.',
      keywords: 'ALS, automated library system, AI library management, facial recognition, MIKIRO Advanced Research',
      author: 'MIKIRO Advanced Research Company',
    },
  },
];

const Billing = () => {
  return (
    <>
      {products.map((product, index) => (
        <section
          key={product.id}
          className={index % 2 === 0 ? layout.sectionReverse : layout.section}
        >
          {/* Metadata for SEO using react-helmet-async */}
          <Helmet>
            <title>{product.metadata.title}</title>
            <meta name="description" content={product.metadata.description} />
            <meta name="keywords" content={product.metadata.keywords} />
            <meta name="author" content={product.metadata.author} />

            {/* JSON-LD structured data for each product */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.title,
                image: product.img,
                description: product.description,
                brand: {
                  "@type": "Organization",
                  name: "MIKIRO",
                  url: "https://www.mikiro.com",
                  logo: "https://www.mikiro.com/logo.png",
                },
                offers: {
                  "@type": "Offer",
                  url: `https://www.mikiro.com#product-${product.id}`,
                  availability: "https://schema.org/InStock",
                  priceCurrency: "USD",
                  price: "Contact for pricing",
                },
              })}
            </script>
          </Helmet>

          {/* Product Image */}
          <div className={index % 2 === 0 ? layout.sectionImgReverse : layout.sectionImg}>
            <img
              src={product.img}
              alt={product.title}
              className="w-full max-w-[600px] h-auto object-contain relative z-[5] rounded-xl shadow-lg"
            />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
          </div>

          {/* Product Info */}
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>{product.title}</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{product.description}</p>
            <p className="mt-3 text-sm text-gray-400 italic">
              Developed by MIKIRO Advanced Research Company
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              {product.stores.map((store, i) => (
                <img
                  key={i}
                  src={store}
                  alt="store"
                  className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
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
