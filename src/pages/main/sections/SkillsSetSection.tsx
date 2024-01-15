import './SkillsSetSection.css';
import {BiRocket} from 'react-icons/bi';
import {IoGlobeOutline, IoHardwareChipOutline, IoLogoFirebase} from 'react-icons/io5';
import {TbBrandThreejs, TbScript, TbTruckDelivery} from 'react-icons/tb';
import {LuGamepad2, LuPencilRuler, LuTerminalSquare} from 'react-icons/lu';
import {
    SiArduino,
    SiAseprite,
    SiBlender,
    SiClion,
    SiDocker,
    SiEclipseide,
    SiFlask,
    SiIntellijidea,
    SiNginx,
    SiOpengl,
    SiProcessingfoundation,
    SiPycharm,
    SiSfml,
    SiVisualstudiocode
} from 'react-icons/si';
import {FaCloudflare, FaRaspberryPi, FaReact} from 'react-icons/fa';
import {FiMonitor, FiServer} from 'react-icons/fi';
import pygame from './pygame.png';
import fusion360 from './fusion360.png';


import CPlain from 'devicons-react/lib/icons/CPlain';
import CplusplusPlain from 'devicons-react/lib/icons/CplusplusPlain';
import CsharpPlain from 'devicons-react/lib/icons/CsharpPlain';
import Css3Plain from 'devicons-react/lib/icons/Css3Plain';
import Html5Plain from 'devicons-react/lib/icons/Html5Plain';
import JavaPlain from 'devicons-react/lib/icons/JavaPlain';
import JavascriptPlain from 'devicons-react/lib/icons/JavascriptPlain';
import LuaPlain from 'devicons-react/lib/icons/LuaPlain';
import OpenalPlain from 'devicons-react/lib/icons/OpenalPlain';
import PythonPlain from 'devicons-react/lib/icons/PythonPlain';
import TypescriptPlain from 'devicons-react/lib/icons/TypescriptPlain';

import {FaUnity} from 'react-icons/fa6';
import {ReactNode} from 'react';
import {MdOutlineCloudQueue} from 'react-icons/md';
import {HiOutlineCubeTransparent} from 'react-icons/hi';
import google_cloud_platform from './google_cloud_platform.png';
import stm32 from './stm32.png';


const ListItem = (props: {
    children: ReactNode,
    order: number
}) => {
    return <li>
        <div className={'list-dot'}>
        </div>
        {props.children}
    </li>;
};

export const SkillsSetSection = () => {
    return <div className={'skills-set-section-container'}>
        <div className={'skills-set-section'}>
            <h1>My Skill Sets</h1>
            <p>

                My skills cover a wide range, from coding and web development to game creation, embedded systems, and
                more.

            </p>


            <h2>
                Toolchains
            </h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">

                        <TbTruckDelivery size={32}/>

                    </div>
                    <h3>Integrated Development Environments</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><SiIntellijidea/></div>
                            IntelliJ IDEA
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><SiPycharm/></div>
                            PyCharm
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><SiClion/></div>
                            CLion
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><SiVisualstudiocode/></div>
                            Visual Studio Code
                        </ListItem>
                        <ListItem order={5}>
                            <div className="icon"><SiEclipseide/></div>
                            Eclipse
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <MdOutlineCloudQueue size={35}/>

                    </div>
                    <h3>DevOps & Cloud Services</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon">
                                <LuTerminalSquare/>
                            </div>
                            SSH
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><SiDocker/></div>
                            Docker
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><img src={google_cloud_platform} style={{scale: '.8'}} alt=""/></div>
                            Google Cloud Platform
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon">

                                <div style={{
                                    width: '20px',
                                    height: '10px',
                                    borderRadius: '10px',
                                    border: '4px solid white',
                                    translate: '1px 0'
                                }}>

                                </div>

                            </div>
                            Oracle Cloud Infrastructure
                        </ListItem>
                        <ListItem order={5}>
                            <div className="icon"><IoLogoFirebase/></div>
                            Firebase
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <HiOutlineCubeTransparent size={32}/>


                    </div>
                    <h3>Design & 3D Modeling Tools</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><SiBlender/></div>
                            Blender
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><img src={fusion360} alt=""/></div>
                            Fusion 360
                        </ListItem>

                    </ul>
                </div>
            </div>


            <h2>

                Programming Languages

            </h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">


                        <BiRocket/>

                    </div>
                    <h3>General Purpose</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><PythonPlain color={'white'} size={28}/></div>
                            Python
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><CPlain color={'white'} size={28}/></div>
                            C
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><CplusplusPlain color={'white'} size={28}/></div>
                            C++
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><CsharpPlain color={'white'} size={28}/></div>
                            C#
                        </ListItem>
                        <ListItem order={5}>
                            <div className="icon"><JavaPlain color={'white'} size={28}/></div>
                            Java
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <IoGlobeOutline/>

                    </div>
                    <h3>Web Development</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><JavascriptPlain color={'white'} size={28}/></div>
                            JavaScript
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><TypescriptPlain color={'white'} size={28}/></div>
                            TypeScript
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><Html5Plain color={'white'} size={28}/></div>
                            HTML
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><Css3Plain color={'white'} size={28}/></div>
                            CSS
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <TbScript/>

                    </div>
                    <h3>Scripting/Extension</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><LuaPlain color={'white'} size={28}/></div>
                            Lua
                        </ListItem>
                    </ul>
                </div>
            </div>


            <h2>
                Web Development Stack
            </h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">


                        <FiMonitor/>

                    </div>
                    <h3>Front End</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><FaReact/></div>
                            React
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><JavascriptPlain color={'white'} size={28}/></div>
                            JavaScript
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><TypescriptPlain color={'white'} size={28}/></div>
                            TypeScript
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><Html5Plain color={'white'} size={28}/></div>
                            HTML
                        </ListItem>
                        <ListItem order={5}>
                            <div className="icon"><Css3Plain color={'white'} size={28}/></div>
                            CSS
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <FiServer/>

                    </div>
                    <h3>Server-side & Deployment</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><SiFlask/></div>
                            Flask
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><IoLogoFirebase/></div>
                            Firebase
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><SiNginx/></div>
                            Nginx
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><FaCloudflare/></div>
                            Cloudflare
                        </ListItem>
                    </ul>
                </div>
            </div>

            <h2>
                Game Development
            </h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">


                        <LuGamepad2/>

                    </div>
                    <h3>Game Engines & Frameworks</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><FaUnity/></div>
                            Unity
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><img src={pygame} alt=""/></div>
                            Pygame
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><SiProcessingfoundation/></div>
                            Processing
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon"><TbBrandThreejs/></div>
                            Three.js
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <IoHardwareChipOutline/>


                    </div>
                    <h3>Low-Level Graphics & Audio</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><SiOpengl size={45}/></div>
                            OpenGL
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><OpenalPlain color={'white'} size={45}/></div>
                            OpenAL
                        </ListItem>
                        <ListItem order={3}>
                            <div className="icon"><SiSfml/></div>
                            SFML
                        </ListItem>
                        <ListItem order={4}>
                            <div className="icon">
                                <div style={{
                                    borderRadius: '50px',
                                    border: '4px solid white',
                                    padding: '0 4px',
                                    translate: '2px 0',
                                    scale: '.45'
                                }}>GLSL
                                </div>
                            </div>
                            GLSL
                        </ListItem>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">


                        <LuPencilRuler/>

                    </div>
                    <h3>Graphics & 3D Modeling</h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><SiBlender/></div>
                            Blender
                        </ListItem>
                        <ListItem order={2}>
                            <div className="icon"><SiAseprite/></div>
                            Aseprite
                        </ListItem>
                    </ul>
                </div>
            </div>

            <h2>
                Embedded Systems & IoT
            </h2>
            <div className="sections-container">
                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">


                        <SiArduino/>

                    </div>
                    <h3>Arduino</h3>
                </div>

                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">


                        <FaRaspberryPi/>

                    </div>
                    <h3>Raspberry Pi</h3>
                </div>

                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">


                        <img src={stm32} alt="STM32"/>

                    </div>
                    <h3>STM32</h3>
                </div>
            </div>
        </div>

    </div>;

};