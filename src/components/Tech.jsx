import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {BallCanvas} from './canvas'

 const Tech = () => {
  console.log("tect",technologies.map((item)=>item.icon))
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech,index)=>(
        <div className='w-28 h-28 ' key={tech.name}>
          <BallCanvas icon={tech.icon} />
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech")