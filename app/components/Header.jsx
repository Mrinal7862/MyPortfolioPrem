import { assets } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = (isDarkMode, setIsDakMode) => {
  return (
    <div className='w-full max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 '>

      <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring', stiffness:100}}
      >

        <Image src={assets.headLog} alt='' className=' rounded-full w-32 m-30' />
      </motion.div>

      <motion.h3
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:0.3}}

      className='flex item-end gap-2 text-xl item-center justify-center md:text-2xl mb-3 font-Ovo'>
        Namaste!! I'm Mrinal Devnath
        <Image src={assets.headLog} alt='' className='rounded-full w-15 ' />
      </motion.h3>

      <motion.h1
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}

      className='text-lg sm:text-6xl lg:text-[66px] font-Ovo'>
        A.I. & Full-Stack Developer
      </motion.h1>

      <motion.p
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}

      className='max-w-2xl mx-auto font-Ovo'>
          I'm pursuing Bachelors in Artificial Intelligence and Machine Learning and pursued minors in Data Science and Generative A.I. || 2 years Experience in Web Development || 3+ years in Educating Developers...
      </motion.p>

      <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}

      className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border  rounded-full  flex items-center gap-2'>Contact me <Image src={isDarkMode ? assets.rightArrowWhite1 : assets.rightArrowDark1} alt='' className='w-4' /></a>

            <a href="/Profile.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My Resume <Image src={ isDarkMode ? assets.downloadIcon : ""} alt='' className='w-4' /></a>
      </motion.div>
    </div>
  )
}

export default Header
