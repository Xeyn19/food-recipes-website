import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MainHome from '../components/MainHome';
import SecondHome from '../components/SecondHome';
import MainHomeSecond from '../components/MainHomeSecond';

const smoothVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 }, 
  visible: {
    opacity: 1,
    y: 0, 
    scale: 1, 
    transition: {
      duration: 0.8, 
      ease: 'easeInOut',
      delay: 0.1, 
    },
  },
};

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={smoothVariant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <motion.div
      className="xl:pb-20 space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <AnimatedSection>
        <MainHome />
      </AnimatedSection>

      <AnimatedSection>
        <MainHomeSecond />
      </AnimatedSection>

      <AnimatedSection>
        <SecondHome />
      </AnimatedSection>
    </motion.div>
  );
};

export default HomePage;
