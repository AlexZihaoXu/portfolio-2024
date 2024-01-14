import './AboutMeSection.css';
import {motion} from 'framer-motion';


export const AboutMeSection = () => {
    return <div className={'about-me-section'}>
        <motion.div className="about-me-content"

             initial={{
                 opacity: 0
             }}
             animate={{
                 opacity: 1
             }}

             transition={{
                 type: 'spring',
                 damping: 12.5,
                 stiffness: 100,
             }}
        >
            <h2>ABOUT ME</h2>

            <p>Hi there! I'm Alex Xu, currently pursuing a degree in Computer Engineering. </p>
            <p>My interests lies in various tech fields, including web development, game design, and electronics.</p>
        </motion.div>

    </div>;
};