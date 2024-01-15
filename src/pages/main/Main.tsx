import {GreetingsSection} from './sections/GreetingsSection.tsx';
import {AboutMeSection} from './sections/AboutMeSection.tsx';
import {EducationSection} from './sections/EducationSection.tsx';
import {ProjectsSection} from './sections/ProjectsSection.tsx';
import {SkillsSetSection} from './sections/SkillsSetSection.tsx';
import {ContactSection} from './sections/ContactSection.tsx';
import {motion} from 'framer-motion';
import {useEffect} from 'react';

export const Main = () => {
    useEffect(() => {
        document.title = 'Alex | Home';
    }, []);

    return <>
        <GreetingsSection/>
        <AboutMeSection/>
        <EducationSection/>
        <motion.div>
            <ProjectsSection/>
            <SkillsSetSection/>
            <ContactSection/>
        </motion.div>

    </>
}