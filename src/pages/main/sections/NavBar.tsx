import './NavBar.css';
import {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';

const NavBarOption = (props: { name: string }) => {
    return <div className="option">
        {props.name}
    </div>;
};
export const NavBar = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const listener = () => {
            if (scrollY > 50) {
                (ref.current as HTMLDivElement).style.boxShadow = '0 0 4px #20283e33'
            } else {
                (ref.current as HTMLDivElement).style.boxShadow = '0 0 0 #ffffff00'

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