/* eslint-disable no-unused-vars */
import topShadow from '@/assets/images/dashboard/top-shadow.svg';
import CreateTemplateHeader from '@/components/reuse/template-header';
import Templates from '@/components/reuse/templates';
import { motion } from 'framer-motion';

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
    <div className='relative'>
      <div className='absolute -top-20 -right-10 -z-10'>
        <img src={topShadow} alt="shadow" />
      </div>
      <CreateTemplateHeader />
      <div className="container mx-auto mt-8">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='max-w-2xl mx-auto text-center'
        >
          <motion.h2 variants={itemVariants} className="template-section-title">Get Started Your Way</motion.h2>
          <motion.p variants={itemVariants} className="template-section-paragraph pt-2">
            Pick a category to explore tailored options — or go bold with a blank canvas and create from scratch! Let me know if you'd like a more casual, formal, or playful tone
          </motion.p>
        </motion.section>
        <Templates />
      </div>
    </div>
  )
}

export default RecommendedTemplates 