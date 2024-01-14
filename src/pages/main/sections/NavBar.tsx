import './NavBar.css';
import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';

const NavBarOption = (props: { name: string }) => {
    const [current, setCurrent] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        setCurrent(window.location.pathname === '/' + props.name.toLowerCase());
    }, [window.location.pathname]);

    return <div className={'option' + (current ? ' current' : '')}
                onClick={() => {
                    window.scrollTo({top: 0})
                    nav('../' + props.name.trim().toLowerCase());
                }}>
        {props.name}
    </div>;
};
export const NavBar = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = () => {
            if (scrollY > 0) {
                (ref.current as HTMLDivElement).style.boxShadow = '0 0 4px #20283e33';
            } else {
                (ref.current as HTMLDivElement).style.boxShadow = '0 0 0 #ffffff00';
            }
        };
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);
    return <motion.div
        className={'nav-bar'} ref={ref}
        initial={{
            y: -50
        }}
        animate={{
            y: 0
        }}
        transition={{type: 'spring', damping: 10, stiffness: 100}}
    >
        <NavBarOption name={'Home'}/>
        <NavBarOption name={'Projects'}/>
        <NavBarOption name={'Awards'}/>
    </motion.div>;
};