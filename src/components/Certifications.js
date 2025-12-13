import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
    eduskills: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const certItems = [
    {
      key: 'awsDev',
      title: 'MERIT Certificate - Poster Presentation',
      issuer: 'Issued By: JNTUGV',
      date: 'March 2023',
      link: 'https://i.postimg.cc/dVQFdpmk/poster-presentation-1st-page-0001-2.jpg',
      image: certifications[0].image,
    },
    {
      key: 'awsCloud',
      title: 'MERN Stack Internship',
      issuer: 'Issued By: Codec Technologies',
      date: 'May 2025 - June 2025',
      link: 'https://www.credly.com/badges/ec72467a-91a3-4a89-9551-e2ad94ed9327/linked_in_profile',
      image: certifications[1].image,
    },
    {
      key: 'github',
      title: 'Django Internship',
      issuer: 'Issued By: Hippocloud Technologies Pvt Ltd',
      date: 'Nov 2023 - Apr 2024',
      link: 'https://www.credly.com/badges/20576d85-9b88-464f-acc6-ccfbaf247027/linked_in_profile',
      image: certifications[2].image,
    },
    {
      key: 'eduskills',
      title: 'Full Stack Developer',
      issuer: 'Issued By: AICTE × EduSkills',
      date: 'Oct 2024 - Dec 2024',
      link: 'https://www.credly.com/badges/20576d85-9b88-464f-acc6-ccfbaf247027/linked_in_profile',
      image: certifications[3].image,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background animation (same vibe as Education) */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container text-center">
        {/* Section title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="mt-2 text-muted-foreground">
            Recognized achievements in the field of technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certItems.map((cert, index) => (
            <motion.div
              key={cert.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              }}
              className="relative"
            >
              {/* Accent dot */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-70 z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              <ReactCardFlip
                isFlipped={isFlipped[cert.key]}
                flipDirection="horizontal"
              >
                {/* Front */}
                <div
                  onClick={() => handleFlip(cert.key)}
                  className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 shadow-lg cursor-pointer transition-all"
                >
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.date}
                  </p>

                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary font-medium"
                    whileHover={{ x: 4 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate →
                  </motion.a>
                </div>

                {/* Back */}
                <div
                  onClick={() => handleFlip(cert.key)}
                  className="rounded-xl border border-border bg-foreground p-4 cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto rounded-md"
                    loading="lazy"
                  />
                </div>
              </ReactCardFlip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
