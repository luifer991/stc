'use client'
import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'

export const StickyScroll = ({
    content
}: {
    content: {
        title: string
        description: string
    }[]
}) => {
    const [activeCard, setActiveCard] = React.useState(0)
    const ref = useRef<any>(null)
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ['start start', 'end start']
    })
    const cardLength = content.length

    useMotionValueEvent(scrollYProgress, 'change', latest => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength)
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest > breakpoint - 0.2 && latest <= breakpoint) {
                setActiveCard(() => index)
            }
        })
    })

    const backgroundColors = [
        'var(--slate-900)',
        'var(--black)',
        'var(--neutral-900)'
    ]
    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length]
            }}
            className='h-[30rem] overflow-y-auto flex justify-end relative space-x-10 rounded-md p-10 section__one'
            ref={ref}
        >
                <h2
                className='hidden text-[68px] lg:block h-[320px] w-[428px] rounded-md bg-gradient-to-r from-white via-golden to-clear-gold sticky text-transparent bg-clip-text top-20 overflow-hidden'
            >Tu Seguridad, Nuestra Prioridad</h2>
            <div className='div relative flex items-start px-4'>
                <div className=''>
                    {content.map((item, index) => (
                        <div key={item.title + index} className='my-20 rounded-[32px] border-2 border-golden/40 bg-golden/25 backdrop-blur-xl w-[700px] h-[230px] flex flex-col justify-center align-middle pl-12'>
                            <motion.h2
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.4
                                }}
                                className='text-2xl font-bold text-white/80'
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.2
                                }}
                                className='text-kg text-white/60 max-w-sm mt-10'
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
