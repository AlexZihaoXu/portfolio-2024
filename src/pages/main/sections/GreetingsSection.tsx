import './GreetingsSection.css';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import {ReactNode} from 'react';

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

        </div>
        <h1>HELLO, I AM ALEX XU</h1>
        <p>description description description description description description description description description
            description description description description description description description description description
            description description description description description description description description description
            description description description description description description description description description
            description description description description </p>
        <div className="buttons-list">
            <SocialMediaButton> <FaInstagram/> </SocialMediaButton>
            <SocialMediaButton> <FaGithub/> </SocialMediaButton>
            <SocialMediaButton> <MdOutlineMailOutline/> </SocialMediaButton>
        </div>
    </div>;
};