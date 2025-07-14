/* eslint-disable no-unused-vars */
import topShadow from '@/assets/images/dashboard/top-shadow.svg';
import noTemplateYet from "@/assets/images/no-templates-yet.png";
import CreateTemplateHeader from '@/components/reuse/template-header';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const [activeItem, setActiveItem] = useState("All");

  const myTemplateItemsMenu = [
    { id: 1, label: "All" },
    { id: 2, label: "Custom" },
    { id: 3, label: "Shared" },
    { id: 4, label: "library" },
  ];

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
          <motion.h2 variants={itemVariants} className="template-section-title">My Templates</motion.h2>
          <motion.p variants={itemVariants} className="emplate-section-paragraph pt-2">
            Starting point templates linked to your account, including those you've created and those that have been shared with you
          </motion.p>
        </motion.section>
        <div className='pt-14'>
          <div className="flex items-center gap-3 bg-white dark:bg-black mx-auto p-2 rounded-full w-fit shadow-[0px_26px_36.2px_0px_#3997FF1A]">
            {
              myTemplateItemsMenu?.map(item =>
                <button key={item?.id} onClick={() => setActiveItem(item?.label)} className={`${activeItem == item?.label ? "bg-dark text-white" : "bg-transparent"} text-[10px] md:text-sm lg:text-base px-2 py-1 md:px-6 md:py-2 rounded-full duration-300`}>
                  {item?.label}
                </button>
              )
            }
          </div>
          <div className='flex items-center justify-center py-10'>
            <img src={noTemplateYet} className='max-w-xs w-full' alt="no-template" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTemplates 