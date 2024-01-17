import './EducationSection.css';
import waterloo from './waterloo_e7.png';
import mci from './middlefield_ci.png';
import {motion} from 'framer-motion';
import {ViewImage} from '../../../components/ViewImage.tsx';
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
                    <ViewImage url={waterloo}/>
                </div>


                <p>
                    With unwavering passion and ambitious dreams, I wholeheartedly dedicated myself to my major studies
                </p>


            </div>

            <div className="education">
                <div className="time">2019 — 2023</div>
                <h3>Middlefield Collegiate Institute</h3>
                <div className="image">
                    <ViewImage url={mci}/>
                </div>

                {/*<p>I graduated from Middlefield C.I. high school, where I developed a strong foundation in various*/}
                {/*    subjects*/}
                {/*    and extracurricular activities.</p>*/}
                <p>
                    As MCI Programming Club president, I organized weekly events, fostering a collaborative coding environment.
                </p>
                <p>
                    MCI's life ignited my passion for teamwork, programming, and project management.
                </p>

            </div>
        </motion.div>

    </div>;
};