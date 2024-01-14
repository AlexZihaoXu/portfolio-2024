import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';


const ImagePopUp = (
    props: {
        url: string,
        exitCallback: () => void
    }
) => {


    return <motion.div
        style={{
            position: 'fixed',
            zIndex: '200',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        initial={{
            backgroundColor: '#33333300',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0)'
        }}
        animate={{
            backgroundColor: '#33333399',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)'

        }}
        exit={{
            backgroundColor: '#33333300',
            backdropFilter: 'blur(0px)'
        }}
        onClick={props.exitCallback}
    >

        <motion.img
            src={props.url} alt={props.url}
            style={{
                background: 'black',
                maxWidth: 'fit-content',
                maxHeight: 'initial',
                width: 'min(80vw, 80vh)',
                height: 'auto',
                objectFit: 'contain',
                marginBottom: '100px'
            }}
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1
            }}
            exit={{
                scale: 0,
                opacity: 0
            }}
            transition={{
                type: 'spring',
                stiffness: 280,
                damping: 21
            }}

            onClick={(e) => e.stopPropagation()}
        />


    </motion.div>;
};

export const ViewImage = (
    props: {
        url: string
    }
) => {

    const [showPopup, setShowPopup] = useState(false);


    return <>
        <AnimatePresence>
            {showPopup ? <ImagePopUp url={props.url} exitCallback={() => setShowPopup(false)}/> : null}
        </AnimatePresence>
        <motion.img
            src={props.url} alt={props.url}
            initial={{
                filter: 'brightness(1)',
                WebkitFilter: 'brightness(1)',

            }}
            whileHover={{
                cursor: 'pointer',
                filter: 'brightness(0.9)',
                WebkitFilter: 'brightness(0.9)'
            }}
            onClick={() => setShowPopup(true)}
        />
    </>;
};