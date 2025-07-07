import { assets, workData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Work = () => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }} className='w-full px-[12%] py-10 scroll-mt-20' id="work">
            <h3 className='text-center text-lg mb-2 font-Ovo'>My Portfolio</h3>
            <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Here are some of my latest Projects please Check it out...
            </p>

            <div>
                {workData.map((project, index) => (
                    <div key={index} style={{}}>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div>
                            <Image src={assets.arrowIcon} alt="send" className='w-5' />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Work
