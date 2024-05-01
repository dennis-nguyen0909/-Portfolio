import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {ComputersCanvas} from './canvas'
import { useIntl } from 'react-intl'
 const Hero = () => {
  const intl=useIntl()
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Khoảng thời gian giữa mỗi chữ cái xuất hiện
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm <span className='text-[#915eff]'>Dennis</span></h1>
            <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {Array.from(intl.formatMessage({id:"overview"})).map((char, index) => (
              <motion.span className='inline-block whitespace-normal' key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
          </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
             flex justify-center items-start p-2">
              <motion.dev 
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:"loop"
                }}
                className="w-3 h-3 bg-secondary mb-1 rounded-full"
               />

             </div>
          </a>
      </div>
    </section>
  )
}

export default Hero