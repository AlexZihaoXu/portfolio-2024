import './ProjectsSection.css';
import {projects_list, ProjectType} from '../../../data/projects.tsx';
import {generateUUID} from '../../../utils.tsx';
import {FaLink} from 'react-icons/fa';

const Project = (props: {
    project: ProjectType
}) => {
    return <div className={'project'}>

        <div className="view-container">

            <div className="date">
                {props.project.date}
            </div>


            <div className="image">
                {
                    (props.project.images_list.length > 0) ? (
                        <img src={props.project.images_list[0]} alt=""/>
                    ) : undefined
                }
            </div>


        </div>
        <div className="information">

            <div className="title">
                {props.project.title}
            </div>


            <div className="description">
                {props.project.description}
            </div>

            <div className="tags">
                {
                    props.project.tags.map((tag) => {
                        return <div style={{
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
                        </div>;
                    })
                }
            </div>
            <div className="links">

                {
                    props.project.links.map((link) => {
                        return <a className={'link'} href={link.link} target="_blank">
                            <div style={{
                                margin: '0 4px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <FaLink size={14}/>
                            </div>
                            {link.name}
                        </a>


                            ;
                    })
                }
            </div>
        </div>
    </div>;
};
export const ProjectsSection = () => {
    return <div className={'projects-section'}>
        <h1>Projects</h1>

        <p>Here are some of the projects I've worked on:</p>

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