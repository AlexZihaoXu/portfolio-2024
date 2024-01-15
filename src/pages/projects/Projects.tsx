import './Projects.css';
import blender_project from './blender-project.png';
import {motion} from 'framer-motion';
import {Project} from '../main/sections/ProjectsSection.tsx';
import {projects_list} from '../../data/projects.tsx';
import {generateUUID} from '../../utils.tsx';
import {useEffect} from 'react';

export const Projects = () => {
    useEffect(() => {
        document.title = 'Alex | Projects';
    }, []);
    return <>
        <div style={{
            height: '48px',
            width: '100%',
            backgroundColor: '#ddd'
        }}>

        </div>
        <div className={'projects-page'}>
            <div style={{
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'top',
                backgroundSize: 'auto',
                backgroundImage: `url(${blender_project})`,
            }}>
                <div style={{
                    backdropFilter: 'blur(8px)'
                }}>
                    <div
                        style={{
                            backdropFilter: 'blur(1px)',
                            WebkitBackdropFilter: 'blur(1px)',
                            backgroundRepeat: 'repeat-x',
                            backgroundPosition: 'top',
                            backgroundSize: 'auto',
                            backgroundImage: `url(${blender_project})`,
                            margin: 'auto'
                        }}
                        className={'image-bg'}
                    >
                        <motion.div
                            className="intro"
                            initial={{
                                backdropFilter: 'blur(30px)',
                                WebkitBackdropFilter: 'blur(30px)'
                            }}
                            animate={{
                                backdropFilter: 'blur(2px)',
                                WebkitBackdropFilter: 'blur(2px)'
                            }}
                            transition={{
                                duration: .3
                            }}
                        >
                            <motion.div
                                className={'title'}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    duration: .2, delay: .1
                                }}
                            >
                                <h1>My Projects</h1>
                            </motion.div>

                            <motion.p
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    duration: .2, delay: .16
                                }}
                            >Here is a list of some of my projects, feel free to check them out.
                            </motion.p>

                        </motion.div>

                    </div>
                </div>

            </div>
            <div className="projects-list-container">
                <motion.div
                    className="projects-list"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                >

                    {
                        (
                            () => {
                                let i = 0;
                                return projects_list.map((project) => {
                                    i++;
                                    return <div key={generateUUID()}>
                                        <Project project={project}/>
                                        {
                                            i < projects_list.length ? (
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

                </motion.div>
            </div>


        </div>
    </>;
};