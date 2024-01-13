import './AboutMeSection.css';

import {motion} from 'framer-motion';

export const AboutMeSection = () => {
    return <motion.div
        className={'about-me-section'}
    >
        <motion.div className="about-me-content"


                    initial={{
                        opacity: 0,
                        transform: 'perspective(50px) translateZ(1px) translateY(30px) rotateX(2deg)'
                    }}

                    whileInView={{
                        opacity: 1,
                        transform: 'perspective(50px) translateZ(0px) translateY(0px) rotateX(0deg)'
                    }}

                    viewport={{ once: true }}


                    transition={{delay: .3, duration: 0.1, type: 'spring', damping: 19, stiffness: 120}}

        >
            <h2>ABOUT ME</h2>

            <p>Hi there! I'm Alex Xu, currently pursuing a degree in Computer Engineering. </p>
            <p>My interests lies in various tech fields, including web development, game design, and electronics.</p>
        </motion.div>

    </motion.div>;
};