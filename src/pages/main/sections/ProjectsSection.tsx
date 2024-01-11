import './ProjectsSection.css';

const Project = (props: {
    preview_url?: string;
    title: string,
    description: string,
    date: string,
    lastOne?: boolean
}) => {
    return <div className={'project'} style={props.lastOne ? {
        borderBottom: 'none'
    } : undefined}>
        <h3>{props.title}
            <div className="date">[{props.date}]</div>
        </h3>
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
            date={'2024 Jan - 2024 Feb'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
            date={'2024 Jan - 2024 Feb'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
            date={'2024 Jan - 2024 Feb'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
            date={'2024 Jan - 2024 Feb'}
        />
        <Project
            description={'desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc '}
            title={'TITLE TITLE'}
            date={'2024 Jan - 2024 Feb'}
            lastOne={true}
        />

        <div className="more">
            More
        </div>

    </div>;
};