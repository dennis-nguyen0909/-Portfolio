import React, { useRef } from 'react'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { useIntl } from 'react-intl';
import {motion, useTransform,useScroll} from 'framer-motion'

const FeedBackCard = ({index,testimonial,name,designation,company,image})=>
{
  const intl =useIntl()

return (
  <motion.div variants={fadeIn("","spring",index*0.5,0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className="mt-1 ">
        <motion.p  className='text-white tracking-wider text-[18px]'>{intl.formatMessage({id:testimonial})}</motion.p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col"   >
              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@</span>{name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-contain' />
        </div>
    </div>

  </motion.div>

)
}
 const FeedsBack = () => {
  const intl=useIntl()
  const ref=useRef(null)
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
  })
  const yBg=useTransform(scrollYProgress,[0,1],["0%","500%"])
  return (
    <motion.div  ref={ref} className='mt-12 bg-black-100 rounded-[20px]'>
        <div className={`${styles.padding}  bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div variants={textVariant()}>
                <p className={styles.heroSubText} style={{zIndex:1}}>{intl.formatMessage({id:"others_say"})}</p>
                <h2 className={styles.heroHeadText}  style={{zIndex:1}}>{intl.formatMessage({id:"testimonials"})}</h2>
            </motion.div>
        </div>
        <div className={`${styles.padding} mt-20 pd-14 flex flex-wrap gap-7`}>
            {testimonials.map((testimonial,index)=>(
              <FeedBackCard  
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
        </div>
    </motion.div  >
  )
}

export default SectionWrapper(FeedsBack,'feedback')