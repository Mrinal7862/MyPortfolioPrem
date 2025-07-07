// use-client
import { assets, serviceData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
            <h3 className='text-center text-lg mb-2 font-Ovo'>What I offer</h3>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'm an A.I. & Full-Stack Developer,I've an year of Experience in Data Science Aritficial Intelligence/ Machine Learning & 2+ years of Experience in Web Development last but not the Least 3+ years in Educating Developers...

            </p>
            <div className='grid grid-cols-(--gridFit)  gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index}

                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                    >
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} target='_blank' className='flex items-center gap-2 text-sm mt-5 text-gray-600'>Read More<Image src={isDarkMode ? assets.arrowDark : assets.arrowIcon} className='w-3' /></a>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Services
