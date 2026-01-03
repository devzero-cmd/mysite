import React from 'react';
import { Helmet } from 'react-helmet';
import styles, { layout } from '../style';
import { socialMedia } from '../constants';

// Cybernetics R&D Section
const CyberneticsRAndD = () => {
  const rAndDProjects = [
    {
      id: '1',
      title: 'Cyborg Cockroach Control',
      content:
        'Using electrode interfaces and controlled electrical pulses, the roach movement is directed with high precision.',
      image: 'https://i.postimg.cc/CKZWgRzg/cockroach.png',
    },
    {
      id: '2',
      title: 'AI-Assisted Stability',
      content:
        'External AI processes monitor environmental conditions and maintain stability in collapsed or complex terrain for search and rescue.',
      image: 'https://i.postimg.cc/XvMgrqQL/image-removebg-preview.png',
    },
    {
      id: '3',
      title: 'Survivor Detection',
      content:
        'AI-driven image and sensor analysis allows recognition of wounded survivors in disaster zones for effective deployment.',
      image: 'https://i.postimg.cc/BnFTfs4h/rubble-removebg-preview.png',
    },
  ];

  return (
    <section id="research-cybernetics" className={`${layout.section}`}>
      <Helmet>
        <title>Cybernetics Research | MIKIRO Advanced Research</title>
        <meta
          name="description"
          content="MIKIRO Advanced Research conducts cutting-edge cybernetics R&D, including cyborg cockroach control, AI-assisted stability, and survivor detection systems for advanced robotics applications."
        />
        <meta
          name="keywords"
          content="MIKIRO, cybernetics, R&D, robotics, AI-assisted systems, cyborg cockroach, survivor detection, advanced research"
        />
        <meta name="author" content="MIKIRO Advanced Research Company" />

        {/* JSON-LD for Cybernetics Projects */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "Cybernetics R&D",
            "description": "MIKIRO leverages cutting-edge cybernetics research for robotic organisms.",
            "hasPart": rAndDProjects.map(p => ({
              "@type": "ResearchProject",
              "name": p.title,
              "description": p.content,
              "image": p.image
            }))
          })}
        </script>
      </Helmet>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Research & Development <br className="sm:block hidden" /> Cybernetics
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MIKIRO leverages cutting-edge cybernetics research to develop controlled robotic organisms.
          Our current project focuses on cyborg cockroaches integrated with AI systems for stability,
          navigation, and survivor detection in complex environments.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex flex-wrap justify-center mt-10`}>
        {rAndDProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center m-4 p-4 bg-gray-900 rounded-[20px] max-w-[300px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover rounded-[12px]"
            />
            <h4 className="font-poppins font-semibold text-white text-[18px] mt-4">{project.title}</h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] text-center mt-2">{project.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Flies R&D Section
const FliesRAndD = () => {
  const flyProjects = [
    {
      id: '1',
      title: 'Fly Surveillance & Tracking',
      content:
        'Tracking the flight patterns of flies to study their potential as vectors for viral transmission in controlled lab environments.',
      image: 'https://i.postimg.cc/sDrQGSrS/1-s2-0-S1110982323000832-gr10.jpg',
    },
    {
      id: '2',
      title: 'Pathogen Interaction Analysis',
      content:
        'Analyzing how viruses interact with fly physiology to understand disease spread in unnoticed vectors.',
      image: 'https://i.postimg.cc/dVDqhtLL/image.png',
    },
    {
      id: '3',
      title: 'Autonomous Monitoring Systems',
      content:
        'Implementing sensors and AI monitoring systems to detect and record fly behavior in high-risk areas.',
      image: 'https://i.postimg.cc/GhgRnwqC/image.png',
    },
  ];

  return (
    <section id="research-flies" className={`${layout.section} mt-20`}>
      <Helmet>
        <title>Flies Research | MIKIRO Advanced Research</title>
        <meta
          name="description"
          content="MIKIRO Advanced Research investigates fly behavior for virology studies, including surveillance, pathogen interaction, and autonomous monitoring to anticipate disease vectors."
        />
        <meta
          name="keywords"
          content="MIKIRO, flies research, virology, disease surveillance, autonomous monitoring, pathogen interaction, advanced research"
        />
        <meta name="author" content="MIKIRO Advanced Research Company" />

        {/* JSON-LD for Flies Projects */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "Flies R&D",
            "description": "MIKIRO investigates the role of flies in virology and disease transmission.",
            "hasPart": flyProjects.map(p => ({
              "@type": "ResearchProject",
              "name": p.title,
              "description": p.content,
              "image": p.image
            }))
          })}
        </script>
      </Helmet>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Research & Development <br className="sm:block hidden" /> Flies Study
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MIKIRO investigates the role of flies in virology and disease transmission, focusing on
          surveillance, pathogen interaction, and autonomous monitoring to anticipate potential outbreak vectors.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex flex-wrap justify-center mt-10`}>
        {flyProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center m-4 p-4 bg-gray-900 rounded-[20px] max-w-[300px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover rounded-[12px]"
            />
            <h4 className="font-poppins font-semibold text-white text-[18px] mt-4">{project.title}</h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] text-center mt-2">{project.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Section with Organization JSON-LD
const Footer = () => {
  return (
    <>
      <Helmet>
        {/* JSON-LD for Organization & Social Links */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MIKIRO",
            "url": "https://www.mikiro.com",
            "logo": "https://www.mikiro.com/logo.png",
            "description": "MIKIRO leverages cutting-edge research in cybernetics, AI, and virology to empower businesses through innovation.",
            "sameAs": socialMedia.map(s => s.link),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+63-123-456-7890",
              "contactType": "customer support",
              "email": "info@mikiro.com"
            }
          })}
        </script>
      </Helmet>

      <CyberneticsRAndD />
      <FliesRAndD />

      {/* Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>

      <section className={`${styles.flexCenter} flex-col p-10 bg-black bg-opacity-80`}>
        <p className="text-dimWhite text-center mb-4">
          Explore more of our innovative solutions and follow MIKIRO’s latest developments.
        </p>

        <div className="flex flex-col items-center mb-10">
          <p className="text-white text-center text-[28px] md:text-[36px] font-bold leading-snug">
            "You think it, we build it."
          </p>
          <span className="mt-2 w-[60px] h-[3px] bg-secondary rounded-full"></span>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#ffffff33]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-4 md:mb-0">
            © 2025 MIKIRO. Empowering businesses through innovation.
          </p>
          <div className="flex flex-row">
            {socialMedia.map((social, index) => (
              <img
                src={social.icon}
                key={social.id}
                alt={social.id}
                className={`w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-200 hover:scale-110 ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
