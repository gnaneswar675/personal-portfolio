import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institute: "Vignan's Institute of Information Technology",
      duration: "July 2024 - Present",
      cgpa: "8.84"
    },
    {
      degree: "Diploma in Computer Engineering",
      institute: "Government Polytechnic Srikakulam",
      duration: "October 2021 - June 2024",
      cgpa: "9.4"
    },
    {
      degree: "SSC Secondary Education",
      institute: "Surya Mahathi Public School",
      duration: "June 2021",
      cgpa: "10"
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              {/* Accent dot */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              <h3 className="text-lg font-semibold mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground">
                {edu.institute}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {edu.duration}
              </p>

              <motion.p
                className="mt-3 font-medium"
                whileHover={{ x: 4 }}
              >
                <strong>CGPA:</strong> {edu.cgpa}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
