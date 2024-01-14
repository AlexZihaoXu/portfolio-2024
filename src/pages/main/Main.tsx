import {GreetingsSection} from './sections/GreetingsSection.tsx';
import {AboutMeSection} from './sections/AboutMeSection.tsx';
import {EducationSection} from './sections/EducationSection.tsx';
import {ProjectsSection} from './sections/ProjectsSection.tsx';
import {SkillsSetSection} from './sections/SkillsSetSection.tsx';
import {ContactSection} from './sections/ContactSection.tsx';
import {NavBar} from './sections/NavBar.tsx';
import {motion} from 'framer-motion';

export const Main = () => {

    return <>
        <NavBar/>
        <GreetingsSection/>
        <AboutMeSection/>
        <EducationSection/>
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
            <ProjectsSection/>
            <SkillsSetSection/>
            <ContactSection/>
        </motion.div>

    </>
}