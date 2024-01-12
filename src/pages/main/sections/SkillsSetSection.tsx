import './SkillsSetSection.css';
import {BiRocket} from 'react-icons/bi';
import {IoGlobeOutline, IoHardwareChipOutline, IoLogoFirebase} from 'react-icons/io5';
import {TbBrandThreejs, TbScript} from 'react-icons/tb';
import {LuGamepad2, LuPencilRuler} from 'react-icons/lu';
import {
    SiArduino,
    SiAseprite,
    SiBlender,
    SiFlask,
    SiNginx,
    SiOpengl,
    SiProcessingfoundation,
    SiSfml
} from 'react-icons/si';
import {FaCloudflare, FaRaspberryPi, FaReact} from 'react-icons/fa';
import {FiMonitor, FiServer} from 'react-icons/fi';
import {VscChip} from 'react-icons/vsc';
import pygame from './pygame.png';
import fusion360 from './fusion360.png';
import {
    CPlain,
    CplusplusPlain,
    CsharpPlain,
    Css3Plain,
    Html5Plain,
    JavaPlain,
    JavascriptPlain,
    LuaPlain,
    OpenalPlain,
    PythonPlain,
    TypescriptPlain
} from 'devicons-react';
import {FaUnity} from 'react-icons/fa6';

export const SkillsSetSection = () => {
    return <>
        <div className={'skills-set-section'}>
            <h1>My Skill Sets</h1>
            <h2>Programming Languages</h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <BiRocket/>
                    </div>
                    <h3>General Purpose</h3>
                    <ul>
                        <li>
                            <div className="icon"><PythonPlain/></div>
                            Python
                        </li>
                        <li>
                            <div className="icon"><CPlain/></div>
                            C
                        </li>
                        <li>
                            <div className="icon"><CplusplusPlain/></div>
                            C++
                        </li>
                        <li>
                            <div className="icon"><CsharpPlain/></div>
                            C#
                        </li>
                        <li>
                            <div className="icon"><JavaPlain/></div>
                            Java
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">
                        <IoGlobeOutline/>

                    </div>
                    <h3>Web Development</h3>
                    <ul>
                        <li>
                            <div className="icon"><JavascriptPlain/></div>
                            JavaScript
                        </li>
                        <li>
                            <div className="icon"><TypescriptPlain/></div>
                            TypeScript
                        </li>
                        <li>
                            <div className="icon"><Html5Plain/></div>
                            HTML
                        </li>
                        <li>
                            <div className="icon"><Css3Plain/></div>
                            CSS
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">
                        <TbScript/>

                    </div>
                    <h3>Scripting/Extension</h3>
                    <ul>
                        <li>
                            <div className="icon"><LuaPlain/></div>
                            Lua
                        </li>
                    </ul>
                </div>
            </div>


            <h2>Web Development Stack</h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <FiMonitor/>

                    </div>
                    <h3>Front End</h3>
                    <ul>
                        <li>
                            <div className="icon"><FaReact/></div>
                            React
                        </li>
                        <li>
                            <div className="icon"><JavascriptPlain/></div>
                            JavaScript
                        </li>
                        <li>
                            <div className="icon"><TypescriptPlain/></div>
                            TypeScript
                        </li>
                        <li>
                            <div className="icon"><Html5Plain/></div>
                            HTML
                        </li>
                        <li>
                            <div className="icon"><Css3Plain/></div>
                            CSS
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">
                        <FiServer/>
                    </div>
                    <h3>Server-side & Deployment</h3>
                    <ul>
                        <li>
                            <div className="icon"><SiFlask/></div>
                            Flask
                        </li>
                        <li>
                            <div className="icon"><IoLogoFirebase/></div>
                            Firebase
                        </li>
                        <li>
                            <div className="icon"><SiNginx/></div>
                            Nginx
                        </li>
                        <li>
                            <div className="icon"><FaCloudflare/></div>
                            Cloudflare
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Game Development</h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <LuGamepad2/>

                    </div>
                    <h3>Game Engines & Frameworks</h3>
                    <ul>
                        <li>
                            <div className="icon"><FaUnity/></div>
                            Unity
                        </li>
                        <li>
                            <div className="icon"><img src={pygame} alt=""/></div>
                            Pygame
                        </li>
                        <li>
                            <div className="icon"><SiProcessingfoundation/></div>
                            Processing
                        </li>
                        <li>
                            <div className="icon"><TbBrandThreejs/></div>
                            Three.js
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">
                        <IoHardwareChipOutline/>


                    </div>
                    <h3>Low-Level Graphics & Audio</h3>
                    <ul>
                        <li>
                            <div className="icon"><SiOpengl/></div>
                            OpenGL
                        </li>
                        <li>
                            <div className="icon"><OpenalPlain/></div>
                            OpenAL
                        </li>
                        <li>
                            <div className="icon"><SiSfml/></div>
                            SFML
                        </li>
                        <li>
                            <div className="icon">
                                <div style={{
                                    borderRadius: '50px',
                                    border: '4px solid white',
                                    padding: '0 4px',
                                    scale: '.5'
                                }}>GLSL
                                </div>
                            </div>
                            GLSL
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="icon">

                        <LuPencilRuler/>

                    </div>
                    <h3>Graphics & 3D Modeling</h3>
                    <ul>
                        <li>
                            <div className="icon"><SiBlender/></div>
                            Blender
                        </li>
                        <li>
                            <div className="icon"><SiAseprite/></div>
                            Aseprite
                        </li>
                        <li>
                            <div className="icon"><img src={fusion360} alt=""/></div>
                            Fusion 360
                        </li>
                    </ul>
                </div>
            </div>

            <h2>Embedded Systems & IoT</h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <SiArduino/>

                    </div>
                    <h3>Arduino</h3>
                </div>

                <div className="section">
                    <div className="icon">
                        <FaRaspberryPi/>
                    </div>
                    <h3>Raspberry Pi</h3>
                </div>

                <div className="section">
                    <div className="icon">
                        <VscChip/>
                    </div>
                    <h3>STM32</h3>
                </div>
            </div>
        </div>

    </>;

};