import React, {useEffect, useRef, useState} from 'react'
import './style.css'
import { motion } from 'framer-motion/dist/framer-motion'
import { Technologies } from '../../Technologies'


const Skill = () => {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return (
        <section id="skills" className='Skills container'>
            <h2 className='sub-title'>Skills</h2>
            <div className='skill-wrapper'>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }} >
                <motion.div 
                    className='stack'
                    drag="x"
                    dragConstraints = {{right: 0, left: -width}}
                    initial = {{x: 100}}
                    animate = {{x: 0}}
                    duration = {{ duration: 0.8 }}
                >
                    {
                        Technologies.map(item => (
                            <motion.div className='stack-item' key={item.id}> 
                                <img src={item.image} alt={item.id} />
                                <span>{item.name}</span>
                            </motion.div>
                        ))
                    }
                </motion.div>
             </motion.div>
            </div>
        </section>
    )
}

export default Skill
