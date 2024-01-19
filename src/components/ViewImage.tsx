import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

import './ViewImage.css';

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
            display: 'flex',
            left: 0,
            top: 0,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        initial={{
            backgroundColor: '#33333300',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)'
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
                background: 'transparent',
                maxWidth: 'fit-content',
                maxHeight: 'initial',
                width: '80vw',
                height: '80vh',
                objectFit: 'contain',
                marginBottom: '50px'
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
            {showPopup ? <ImagePopUp url={props.url}
                                     exitCallback={() => setShowPopup(false)}/> : null}
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

const VidPopUp = (
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
            display: 'flex',
            left: 0,
            top: 0,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        initial={{
            backgroundColor: '#33333300',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)'
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

        <motion.video
            src={props.url}
            style={{
                background: 'black',
                width: 'min(80vw, 800px)',
                height: 'min(50vh, 600px)',
                objectFit: 'contain',
                marginBottom: '50px',
                borderRadius: '10px'
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

            autoPlay={true}
            muted={true}
            loop={true}
            controls={true}
            playsInline={true}
            onClick={(ev) => ev.stopPropagation()}
        />


    </motion.div>;
};

export const ViewVideo = (
    props: {
        url: string
    }
) => {

    const [showPopup, setShowPopup] = useState(false);


    return <>
        <AnimatePresence>
            {showPopup ? <VidPopUp url={props.url}
                                   exitCallback={() => setShowPopup(false)}/> : null}
        </AnimatePresence>
        <motion.video
            className={'view-video'}
            src={props.url}
            initial={{
                filter: 'brightness(1)',
                WebkitFilter: 'brightness(1)',

            }}
            whileHover={{
                cursor: 'pointer',
                filter: 'brightness(0.9)',
                WebkitFilter: 'brightness(0.9)'
            }}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            onClick={() => setShowPopup(true)}
        />
    </>;
};