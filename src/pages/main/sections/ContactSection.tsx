import './ContactSection.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {ZoomShow} from '../../../utils.tsx';

export const ContactSection = () => {
    return <div className={'contact-section'}>
        <h1>Contact Me</h1>
        <ul>

            <ZoomShow delay={40}>
                <a href={'mailto:alex.zihao.xu@gmail.com'}>

                    <div className="icon">
                        <MdOutlineEmail/>
                    </div>
                    <div className="cat">Email:</div>
                    alex.zihao.xu@gmail.com
                </a>

            </ZoomShow>


            <ZoomShow delay={80}>
                <a href={'https://github.com/AlexZihaoXu'} target="_blank">
                    <div className="icon">
                        <FaGithub/>
                    </div>
                    <div className="cat">GitHub:</div>
                    https://github.com/AlexZihaoXu
                </a>
            </ZoomShow>

            <ZoomShow delay={120}>
                <a href={'https://www.instagram.com/alex_xu.2005'} target="_blank">
                    <div className="icon">
                        <FaInstagram/>
                    </div>
                    <div className="cat">Instagram:</div>
                    alex_xu.2005
                </a>
            </ZoomShow>

        </ul>
    </div>;
};