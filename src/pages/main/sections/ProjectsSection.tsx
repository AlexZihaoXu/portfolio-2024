import './ProjectsSection.css';
import {projects_list} from '../../../data/projects.ts';

const Project = (props: {
    preview_url?: string;
    title: string,
    description: string,
    date: string,
}) => {
    return <div className={'project'}>
        <div className="image">

        </div>
        <div className="information">
            <div className="title">
                {props.title}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    </div>;
};
export const ProjectsSection = () => {
    return <div className={'projects-section'}>
        <h1>Projects</h1>

        {
            projects_list.map((project) => {
                return <Project
                    title={project.title}
                    date={project.date as string}
                    description={project.description}

                >

                </Project>
            })
        }

        <div className="more">
            View More
        </div>

    </div>;
};