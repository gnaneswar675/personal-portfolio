import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

const Certifications = () => {

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
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
              }}
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary font-medium"
                  whileHover={{ x: 4 }}
                >
                  View Certificate →
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
