import './GreetingsSection.css';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md';
import {ReactNode, useEffect} from 'react';
import avatar from './avatar.png';
import {motion} from 'framer-motion';

const SocialMediaButton = (props: {
    children: ReactNode,
    url: string,
    delay: number
}) => {
    return <motion.a className="button" href={props.url} target="_blank"
                     initial={{opacity: 0, y: 0, scale: 0.001}}
                     whileInView={{
                         opacity: 1, y: 0, scale: 1
                     }}
                     animate={{
                         opacity: 1, y: 0, scale: 1
                     }}
                     exit={{opacity: 0, y: 50}}
                     transition={{delay: props.delay, duration: 0.5, type: 'spring', damping: 10, stiffness: 100}}
    >
        {props.children}
    </motion.a>;
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
                    requestAnimationFrame(render)
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

    return <motion.div
        className="greetings-section"

    >
        <motion.div className="avatar"

                    initial={{opacity: 0, y: 0, scale: 0.001}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.5, type: 'spring', damping: 10, stiffness: 100}}
        >
            <canvas id={'avatar-cvs'}/>
        </motion.div>
        <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 50}}
            transition={{duration: 0.5, delay: 0.3}}
        >HELLO, I AM ALEX XU
        </motion.h1>
        <motion.p
            initial={{opacity: 0, transform: 'translate(0, 10px) scale(0.97, 0.73)'}}
            animate={{opacity: 1, transform: 'translate(0, 0) scale(1, 1)'}}
            exit={{opacity: 0, y: 50}}
            transition={{duration: 0.3, delay: 0.5}}
        >A <span style={{
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
        </motion.p>
        <div className="buttons-list">
            <SocialMediaButton delay={.1} url={'https://www.instagram.com/alex_xu.2005'}> <FaInstagram/>
            </SocialMediaButton>
            <SocialMediaButton delay={.2} url={'https://github.com/AlexZihaoXu'}> <FaGithub/> </SocialMediaButton>
            <SocialMediaButton delay={.3} url={'mailto:alex.zihao.xu@gmail.com'}> <MdOutlineMailOutline/>
            </SocialMediaButton>
        </div>
    </motion.div>;
};