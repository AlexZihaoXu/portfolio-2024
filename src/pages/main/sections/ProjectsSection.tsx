import './ProjectsSection.css';
import {projects_list, ProjectType} from '../../../data/projects.tsx';
import {DissolveIn, FadeIn, generateUUID, ZoomBounceIn, ZoomShow} from '../../../utils.tsx';
import {FaLink} from 'react-icons/fa';

const Project = (props: {
    project: ProjectType
}) => {
    return <div className={'project'}>

        <div className="view-container">
            <FadeIn delay={100}>
                <div className="date">
                    {props.project.date}
                </div>
            </FadeIn>
            <DissolveIn delay={220}>
                <div className="image">
                    {
                        (props.project.images_list.length > 0) ? (
                            <img src={props.project.images_list[0]} alt=""/>
                        ) : undefined
                    }
                </div>
            </DissolveIn>

        </div>
        <div className="information">
            <DissolveIn delay={100}>
                <div className="title">
                    {props.project.title}
                </div>
            </DissolveIn>
            <FadeIn delay={300}>
                <div className="description">
                    {props.project.description}
                </div>
            </FadeIn>
            <div className="tags">
                {
                    (() => {
                        let i = 0;
                        return props.project.tags.map((tag) => {
                            return <ZoomBounceIn delay={10 + (i++) * 30}>
                                <div style={{
                                    padding: '4px 8px',
                                    fontSize: '11px',
                                    fontFamily: '"Open Sans", sans-serif',
                                    fontWeight: 'bold',
                                    color: '#9ca3b6',
                                    border: '1px solid #9ca3b6',
                                    marginTop: '8px',
                                    marginRight: '4px',
                                    borderRadius: '16px',
                                    width: 'fit-content',
                                    display: 'inline-block',
                                    cursor: 'default'
                                }}>
                                    {tag}
                                </div>
                            </ZoomBounceIn>;
                        });
                    })()
                }
            </div>
            <div className="links">

                {
                    props.project.links.map((link) => {
                        return <FadeIn delay={10}>
                            <ZoomBounceIn delay={30}>
                                <a className={'link'} href={link.link} target="_blank">
                                    <div style={{
                                        margin: '0 4px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <FaLink size={14}/>
                                    </div>
                                    {link.name}
                                </a>

                            </ZoomBounceIn>
                        </FadeIn>;
                    })
                }
            </div>
        </div>
    </div>;
};
export const ProjectsSection = () => {
    return <div className={'projects-section'}>
        <h1>Projects</h1>
        <FadeIn delay={100}>
            <p>Here are some of the projects I've worked on:</p>
        </FadeIn>
        {
            (
                () => {
                    let i = 0;
                    return projects_list.slice(0, 3).map((project) => {
                        i++;
                        return <>
                            <Project project={project} key={generateUUID()}/>
                            {
                                i < 3 ? (
                                    <div style={{
                                        width: 'min(80vw, 800px)',
                                        borderBottom: '1px solid #9BA4B544',
                                        margin: 'auto'
                                    }}
                                         key={generateUUID()}

                                    >
                                    </div>
                                ) : null
                            }
                        </>;
                    });
                }
            )()
        }

    </div>;
};