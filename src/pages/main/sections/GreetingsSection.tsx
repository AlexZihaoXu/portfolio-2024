import './GreetingsSection.css';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import {ReactNode, useEffect} from 'react';
import avatar from './avatar.png';
import {motion} from 'framer-motion';
import {PiLinkedinLogoBold} from 'react-icons/pi';

const SocialMediaButton = (props: {
    children: ReactNode,
    url: string,
    delay: number
}) => {
    return <a className="button" href={props.url} target="_blank">
        {props.children}
    </a>;
};


export const GreetingsSection = () => {
    useEffect(() => {
        let run = true;
        const cvs = document.getElementById('avatar-cvs') as HTMLCanvasElement;
        const width = 140;
        const height = 140;
        cvs.width = width;
        cvs.height = height;
        const image = new Image();
        image.src = avatar;
        let lastUpdateTime = Date.now() / 1000;

        let mouseX = 0;
        let mouseY = 0;
        let x = 0;
        let y = 0;
        const listener = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            lastUpdateTime = Date.now() / 1000;
        };
        window.addEventListener('mousemove', listener);

        let lastTickTime = Date.now() / 1000;
        const render = () => {
            const ctx = cvs.getContext('2d') as CanvasRenderingContext2D;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'red';
            ctx.save();

            ctx.translate(width / 2, height / 2);
            ctx.scale(.76, .76);
            ctx.translate(-50, 52);
            ctx.drawImage(image, -image.width / 2, -image.height / 2);

            ctx.fillStyle = '#535353';
            // ctx.fillStyle = 'red'
            const rect = cvs.getBoundingClientRect();
            const relX = mouseX - rect.x - 60;
            const relY = mouseY - rect.y - 50;

            const dis = Math.max(0.1, Math.sqrt(relX * relX + relY * relY));
            let dx = relX / dis;
            let dy = relY / dis;

            dx = Math.max(Math.min(3, dx * dx * dx * dis / 20), -2.5);
            dy = Math.max(Math.min(3, dy * dy * dy * dis / 20), -2.5);


            const now = Date.now() / 1000;
            const dt = Math.min(1, (now - lastTickTime) * 20);
            lastTickTime = now;

            x += (dx - x) * dt;
            y += (dy - y) * dt;

            ctx.fillRect(29 + x, -88 + y, 10, 10);

            ctx.restore();

            if (run) {
                if (now - lastUpdateTime > 3 || cvs.getBoundingClientRect().y < -200) {
                    setTimeout(() => {
                        requestAnimationFrame(render);
                    }, 200);
                } else {
                    requestAnimationFrame(render);
                }
            }
            if (now - lastUpdateTime > 1) {
                mouseX = rect.x + 60;
                mouseY = rect.y + 50;
            }
        };
        render();
        return () => {
            run = false;
            window.removeEventListener('mousemove', listener);
        };
    }, []);

    return <div
        className="greetings-section"

    >
        <motion.div
            className="avatar"
            initial={{
                scale: 0,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}

            transition={{
                type: 'spring',
                damping: 12.5,
                stiffness: 100,
            }}
        >
            <canvas id={'avatar-cvs'}/>
        </motion.div>
        <motion.div
            initial={{

                opacity: 0
            }}
            animate={{
                opacity: 1
            }}

            transition={{
                type: 'spring',
                damping: 12.5,
                stiffness: 100,
            }}
        >
            <h1>HELLO, I AM ALEX XU
            </h1>
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
                <SocialMediaButton delay={.1} url={'https://www.instagram.com/alex_xu.2005'}> <FaInstagram/>
                </SocialMediaButton>
                <SocialMediaButton delay={.2} url={'https://www.linkedin.com/in/alex-xu-912bb528b/'}>
                    <PiLinkedinLogoBold/>
                </SocialMediaButton>
                <SocialMediaButton delay={.3} url={'https://github.com/AlexZihaoXu'}> <FaGithub/> </SocialMediaButton>
                <SocialMediaButton delay={.4} url={'mailto:alex.zihao.xu@gmail.com'}> <MdOutlineMailOutline/>
                </SocialMediaButton>
            </div>
        </motion.div>

    </div>;
};