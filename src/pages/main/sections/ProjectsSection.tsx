import './ProjectsSection.css';
import {projects_list, ProjectType} from '../../../data/projects.tsx';
import {generateUUID} from '../../../utils.tsx';
import {FaLink} from 'react-icons/fa';
import {ViewImage, ViewVideo} from '../../../components/ViewImage.tsx';
import {useNavigate} from 'react-router-dom';

export const Project = (props: {
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
                        // <img src={props.project.images_list[0]} alt=""/>


                        props.project.images_list[0].endsWith('.png') ?
                            <ViewImage url={props.project.images_list[0]}/> :
                            <ViewVideo url={props.project.images_list[0]}/>

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
                        }} key={generateUUID()}>
                            {tag}
                        </div>;
                    })
                }
            </div>
            <div className="links">

                {
                    props.project.links.map((link) => {
                        return <a className={'link'} href={link.link} target="_blank" key={generateUUID()}>
                            <div style={{
                                margin: '0 4px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <FaLink size={14}/>
                            </div>
                            {link.name}
                        </a>;
                    })
                }
            </div>
        </div>
    </div>;
};
export const ProjectsSection = () => {
    const nav = useNavigate();
    return <div className={'projects-section'}>
        <h1>Projects</h1>

        <p>Frameworks facilitate rapid development, yet the confidence of coding gained from scratch is
            unparalleled.</p>

        {
            (
                () => {
                    let i = 0;
                    return projects_list.slice(0, 4).map((project) => {
                        i++;
                        return <div key={generateUUID()}>
                            <Project project={project}/>
                            {
                                i < 4 ? (
                                    <div style={{
                                        width: 'min(80vw, 800px)',
                                        borderBottom: '1px solid #9BA4B544',
                                        margin: 'auto'
                                    }}
                                    >
                                    </div>
                                ) : null
                            }
                        </div>;
                    });
                }
            )()
        }

        <div className="more" onClick={() => {
            nav('../projects');
            scrollTo({top: 0});
        }}>
            View More
        </div>

    </div>;
};