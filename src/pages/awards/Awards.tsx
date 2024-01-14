import './Awards.css';
import {motion} from 'framer-motion';
export const Awards = () => {
    return <div className={'awards-page'}>

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
            >Sorry, this page is still in development!</motion.p>

        </div>

    </div>;
};