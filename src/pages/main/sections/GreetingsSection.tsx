import './GreetingsSection.css';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import {ReactNode} from 'react';
import avatar from './avatar.png';

const SocialMediaButton = (props: {
    children: ReactNode
}) => {
    return <div className="button">
        {props.children}
    </div>;
};


export const GreetingsSection = () => {

    return <div className="greetings-section">
        <div className="avatar">
            <img src={avatar} alt="Avatar"/>
        </div>
        <h1>HELLO, I AM ALEX XU</h1>
        <p>Aklas als kdjf la sdkjf as dlkfjas dla dsaljf aslk dfjas dal sjdf asldj kfas dla dsaljf aslk dfjas sdkl sdklf
            jas da lsk jdfa jdfa jdfa jdfa</p>
        <div className="buttons-list">
            <SocialMediaButton> <FaInstagram/> </SocialMediaButton>
            <SocialMediaButton> <FaGithub/> </SocialMediaButton>
            <SocialMediaButton> <MdOutlineMailOutline/> </SocialMediaButton>
        </div>
    </div>;
};