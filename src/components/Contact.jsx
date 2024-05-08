import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../styles';
import{EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useIntl } from 'react-intl';
import { Button, message } from 'antd';
import '../contact.css'
import { useScroll } from '@react-three/drei';
// template_g0zxpiv
// service_8nt0esq
// Aoh3AKuCq2JsNN-3V
 const Contact = () => {
  const formRef=useRef()
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setLoading]=useState(false)

  const handleOnSubmit=(e)=>{ 
    e.preventDefault()
    setLoading(true)

    emailjs.send('service_8nt0esq','template_g0zxpiv',{
      from_name:form.name,
      to_name:'Dennis',
      from_email:form.email,
      to_email:'dennis.nguyen0909@gmail.com',
      message:form.message
    
    }
  ,"Aoh3AKuCq2JsNN-3V")
  .then((result)=>{
    setLoading(false)
    message.success("Thanks for send email!")
    setForm({
      email:'',
      name:'',
      message:''
    })
  },(error)=>{
    setLoading(false)
    console.log(error)
    alert("Error")
  })
    
  }
  const [active,setActive]=useState(false)
  const[toggle,setToggle]=useState(false)
  
  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const intl=useIntl()
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div 
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
          variants={slideIn("left","tween" ,0.2,1)}>
            <p className={styles.heroSubText}>{intl.formatMessage({id:"get_in_touch"})}</p>
            <p className={styles.heroHeadText}>{intl.formatMessage({id:"contact_me"})}</p>
            <form onSubmit={handleOnSubmit} ref={formRef} 
              className='mt-12 flex flex-col gap-8'
              >
              <label className='flex flex-col '>
                <span className='text-white font-medium mb-4'>{intl.formatMessage({id:"your_name"})}</span>
                <input type="text" name="name" value={form.name} 
                  onChange={handleOnChange}  placeholder={intl.formatMessage({id:"what_name"})}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                    outlined-none border-none font-medium
                  '
                  />
              </label>
              <label className='flex flex-col '>
                <span className='text-white font-medium mb-4'>{intl.formatMessage({id:"your_email"})}</span>
                <input type="email" name="email" value={form.email} 
                  onChange={handleOnChange}  placeholder={intl.formatMessage({id:"what_email"})}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                    outlined-none border-none font-medium
                  '
                  />
              </label>
              <label className='flex flex-col '>
                <span className='text-white font-medium mb-4'>{intl.formatMessage({id:"your_message"})}</span>
                <textarea rows={'7'}name="message" value={form.message} 
                  onChange={handleOnChange}  placeholder={intl.formatMessage({id:"what_message"})}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                    outlined-none border-none font-medium
                  '
                  />
              </label>
              <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
                shadow-md shadow-primary rounded-xl
              ">{loading?intl.formatMessage({id:"sending"}):intl.formatMessage({id:"send"})}</button>
            </form>
        </motion.div>
        <motion.div 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        variants={slideIn("right","tween",0.2,1)}>
            <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");