/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import CreateTemplateHeader from '../../components/reusuable/create-template-header';
import Templates from '../../components/ui/templates';

const RecommendedTemplates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <>
      {/* Header */}
      <CreateTemplateHeader />

      {/* Content Area */}
      <div className="container mx-auto mt-8">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='max-w-2xl mx-auto text-center'
        >
          <motion.h2 variants={itemVariants} className="template-section-title">Get Started Your Way</motion.h2>
          <motion.p variants={itemVariants} className="emplate-section-paragraph pt-2">
            Pick a category to explore tailored options — or go bold with a blank canvas and create from scratch! Let me know if you'd like a more casual, formal, or playful tone
            </motion.p>
        </motion.section>
      </div>
        <Templates />
    </>
  )
}

export default RecommendedTemplates 