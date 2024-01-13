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
import {ReactNode} from 'react';
import {MdOutlineCloudQueue} from 'react-icons/md';
import {HiOutlineCubeTransparent} from 'react-icons/hi';
import google_cloud_platform from './google_cloud_platform.png';
import stm32 from './stm32.png';
import {DissolveIn, FadeIn, ZoomBounceIn, ZoomShow} from '../../../utils.tsx';
import {motion} from 'framer-motion';

const ListItem = (props: {
    children: ReactNode,
    order: number
}) => {
    return <motion.li

        initial={{
            opacity: 0,
            scale: 0.8
        }}

        whileInView={{
            opacity: 1,
            scale: 1
        }}

        viewport={{once: true}}


        transition={{delay: .1 + props.order * 50 / 1000, duration: 0.1, type: 'spring', damping: 15, stiffness: 120}}
    >

        <DissolveIn delay={props.order * 20}>
            <div className={'list-dot'}>
            </div>
        </DissolveIn>
        {props.children}
    </motion.li>;
};

export const SkillsSetSection = () => {
    return <div className={'skills-set-section-container'}>
        <div className={'skills-set-section'}>
            <h1>My Skill Sets</h1>
            <p>
                <FadeIn delay={80}>
                    My skills cover a wide range, from coding and web development to game creation, embedded systems,
                    and
                    more.
                </FadeIn>
            </p>


            <h2><ZoomShow delay={100}>
                Toolchains
            </ZoomShow></h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <ZoomBounceIn delay={200}>
                            <TbTruckDelivery size={32}/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Integrated Development Environments</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <MdOutlineCloudQueue size={35}/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>DevOps & Cloud Services</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <HiOutlineCubeTransparent size={32}/>
                        </ZoomBounceIn>

                    </div>
                    <h3><ZoomShow delay={180}>Design & 3D Modeling Tools</ZoomShow></h3>
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
                <ZoomShow delay={100}>
                    Programming Languages
                </ZoomShow>
            </h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <BiRocket/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>General Purpose</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <IoGlobeOutline/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Web Development</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <TbScript/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Scripting/Extension</ZoomShow></h3>
                    <ul>
                        <ListItem order={1}>
                            <div className="icon"><LuaPlain color={'white'} size={28}/></div>
                            Lua
                        </ListItem>
                    </ul>
                </div>
            </div>


            <h2><ZoomShow delay={100}>
                Web Development Stack
            </ZoomShow></h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <FiMonitor/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Front End</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <FiServer/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Server-side & Deployment</ZoomShow></h3>
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

            <h2><ZoomShow delay={100}>
                Game Development
            </ZoomShow></h2>
            <div className="sections-container">
                <div className="section">
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <LuGamepad2/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Game Engines & Frameworks</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <IoHardwareChipOutline/>
                        </ZoomBounceIn>

                    </div>
                    <h3><ZoomShow delay={180}>Low-Level Graphics & Audio</ZoomShow></h3>
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
                        <ZoomBounceIn delay={200}>

                            <LuPencilRuler/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Graphics & 3D Modeling</ZoomShow></h3>
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

            <h2><ZoomShow delay={100}>
                Embedded Systems & IoT
            </ZoomShow></h2>
            <div className="sections-container">
                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <SiArduino/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Arduino</ZoomShow></h3>
                </div>

                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <FaRaspberryPi/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>Raspberry Pi</ZoomShow></h3>
                </div>

                <div className="section" style={{
                    margin: '0 12px'
                }}>
                    <div className="icon">
                        <ZoomBounceIn delay={200}>

                            <img src={stm32} alt="STM32"/>
                        </ZoomBounceIn>
                    </div>
                    <h3><ZoomShow delay={180}>STM32</ZoomShow></h3>
                </div>
            </div>
        </div>

    </div>;

};