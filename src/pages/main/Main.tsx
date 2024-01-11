import {GreetingsSection} from './sections/GreetingsSection.tsx';
import {AboutMeSection} from './sections/AboutMeSection.tsx';
import {EducationSection} from './sections/EducationSection.tsx';
import {ProjectsSection} from './sections/ProjectsSection.tsx';

export const Main = () => {

    return <>
        <GreetingsSection/>
        <AboutMeSection/>
        <EducationSection/>
        <ProjectsSection/>
    </>
}