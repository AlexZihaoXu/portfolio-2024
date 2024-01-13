import {motion} from 'framer-motion';
import {ReactNode} from 'react';

export function generateUUID() {
    // Create a random UUID using the RFC4122 version 4 format
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const ZoomBounceIn = (props: {
    children: ReactNode,
    delay: number
}) => {
    return <motion.div
        style={{
            display: 'inline-block'
        }}
        initial={{
            opacity: 0,
            scale: 0
        }}

        whileInView={{
            opacity: 1,
            scale: 1
        }}

        viewport={{once: true}}


        transition={{delay: .2 + props.delay / 1000, duration: 0.1, type: 'spring', damping: 13, stiffness: 120}}
    >
        {props.children}
    </motion.div>;
};

export const FadeIn = (props: { children: ReactNode, delay: number }) => {
    return <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        viewport={{once: true}}
        transition={{delay: props.delay / 1000 + .2, duration: 0.5}}
    >
        {props.children}
    </motion.div>;
};
export const DissolveIn = (props: { children: ReactNode, delay: number }) => {
    return (
        <motion.div
            style={{
                display: 'inline-block',
            }}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: props.delay / 1000 + 0.2, duration: 0.5}}
        >
            {props.children}
        </motion.div>
    );
};

export const ZoomShow = (props: { children: ReactNode, delay: number, duration?: number }) => {
    return <motion.div

        initial={{opacity: 0, scale: 0.8}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        viewport={{once: true}}
        transition={{delay: .2 + props.delay / 1000, duration: props.duration ? props.duration / 1000 : .4}}
    >
        {props.children}
    </motion.div>;
};