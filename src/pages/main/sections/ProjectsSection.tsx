import './ProjectsSection.css';

const Project = (props: {
    preview_url?: string;
    title: string,
    description: string
}) => {
    return <div className={'project'}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="image">

        </div>
    </div>;
};
export const ProjectsSection = () => {
    return <div className={'projects-section'}>
        <h1>Projects</h1>

        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
        />

    </div>;
};