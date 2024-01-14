import './AboutMeSection.css';
import {motion} from 'framer-motion';
import {FaExternalLinkAlt} from 'react-icons/fa';
import resume from '../../../../files/Alex_Xu-Resume.pdf'


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
            <p>I have practical experience in various tech fields, particularly in web dev and game dev, as well as
                electronics.</p>
            <p>
                If you're interested in delving deeper into my background and skills, feel free to explore around or
                check out my <a
                href={resume}><span style={{
                marginRight: '4px',
                fontStyle: 'italic',
            }}>resume</span> <FaExternalLinkAlt size={14}/></a>.</p>
        </motion.div>

    </div>;
};