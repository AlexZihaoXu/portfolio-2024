import './GreetingsSection.css';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import {ReactNode} from 'react';
import avatar from './avatar.png';

const SocialMediaButton = (props: {
    children: ReactNode,
    url: string
}) => {
    return <a className="button" href={props.url} target="_blank">
        {props.children}
    </a>;
};


export const GreetingsSection = () => {

    return <div className="greetings-section">
        <div className="avatar">
            <img src={avatar} alt="Avatar"/>
        </div>
        <h1>HELLO, I AM ALEX XU</h1>
        <p>A <span style={{
            fontWeight: 'bolder',
            fontSize: '24px',
            fontFamily: 'Mukta, sans-serif'
        }} className={'computer-engineering'}>
                Computer Engineering
            </span> student at the <span style={{
            fontWeight: 'bolder',
            fontSize: '24px',
            fontFamily: 'Mukta, sans-serif'

        }} className={'university-of-waterloo'}>
                University of Waterloo.
            </span>
        </p>
        <div className="buttons-list">
            <SocialMediaButton url={'https://www.instagram.com/alex_xu.2005'}> <FaInstagram/> </SocialMediaButton>
            <SocialMediaButton url={'https://github.com/AlexZihaoXu'}> <FaGithub/> </SocialMediaButton>
            <SocialMediaButton url={'mailto:alex.zihao.xu@gmail.com'}> <MdOutlineMailOutline/> </SocialMediaButton>
        </div>
    </div>;
};