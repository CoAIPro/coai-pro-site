/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import CreateTemplateHeader from '../../components/reusuable/create-template-header';

const MyTemplates = () => {
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
          <motion.h2 variants={itemVariants} className="template-section-title">My Templates</motion.h2>
          <motion.p variants={itemVariants} className="emplate-section-paragraph pt-2">
            Starting point templates linked to your account, including those you’ve created and those that have been shared with you
          </motion.p>
        </motion.section>
        
      </div>
    </>
  )
}

export default MyTemplates 