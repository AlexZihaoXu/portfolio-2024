import './EducationSection.css';
import waterloo from './waterloo_e7.png';
import mci from './middlefield_ci.png';
import {motion} from 'framer-motion';
export const EducationSection = () => {
    return <div className={'education-section'}>
        <motion.div

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
            <h2>Education</h2>
            <div className="education">

                <div className="time">2023 — 2028</div>


                <h3>University of Waterloo</h3>

                <h4>Undergraduate, Computer Engineering</h4>

                <div className="image">
                    <img src={waterloo} alt="Waterloo E7"/>
                </div>


                <p>I am currently an undergraduate Computer Engineering student at the University of Waterloo.</p>


            </div>

            <div className="education">
                <div className="time">2019 — 2023</div>
                <h3>Middlefield Collegiate Institute</h3>
                <div className="image">
                    <img src={mci} alt="Middlefield C.I."/>
                </div>

                <p>I graduated from Middlefield C.I. high school, where I developed a strong foundation in various
                    subjects
                    and extracurricular activities.</p>
                <p>
                    I also served as the president of the MCI's Programming Club, organizing events and encouraging a
                    collaborative atmosphere for coding fans.</p>

            </div>
        </motion.div>

    </div>;
};