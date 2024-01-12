import './ContactSection.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaGithub, FaInstagram} from 'react-icons/fa';

export const ContactSection = () => {
    return <div className={'contact-section'}>
        <h1>Contact Me</h1>
        <ul>
            <li>
                <div className="icon">
                    <MdOutlineEmail />
                </div>
                <div className="cat">Email:</div>
                alex.zihao.xu@gmail.com
            </li>
            <li>
                <div className="icon">
                    <FaGithub />
                </div>
                <div className="cat">GitHub:</div>
                https://github.com/AlexZihaoXu
            </li>
            <li>
                <div className="icon">
                    <FaInstagram />
                </div>
                <div className="cat">Instagram:</div>
                alex_xu.2005
            </li>
        </ul>
    </div>;
};