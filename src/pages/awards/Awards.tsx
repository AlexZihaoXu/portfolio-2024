import './Awards.css';
import {motion} from 'framer-motion';
import {useEffect} from 'react';

export const Awards = () => {
    useEffect(() => {
        document.title = 'Alex | Awards';
    }, []);
    return <motion.div
        className={'awards-page'}
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        exit={{
            opacity: 0,
            scale: 0
        }}
    >

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <motion.p
                style={{
                    fontFamily: '"Graduate", serif',
                    color: '#be0606',
                    width: 'fit-content',
                    padding: '8px 16px',
                    fontSize: '15px',
                    borderRadius: '8px'
                }}

                initial={{
                    backgroundColor: '#fd1e1e',
                }}

                animate={{
                    backgroundColor: '#fae774',
                }}
            >Sorry, this page is still in development!
            </motion.p>

        </div>

    </motion.div>;
};