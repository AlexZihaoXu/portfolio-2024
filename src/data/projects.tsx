import minecraft_0 from './minecraft.png';
import party_physics0 from './party_physics.png';
import robotic_arm0 from './robotic_arm.png';

export type ProjectType = {
    title: string,
    date: string | undefined,
    category: 'Game Dev' | 'Frontend' | 'Backend' | 'Hardware',
    tags: string[],
    images_list: string[],
    links: {
        name: string,
        link: string
    }[],
    description: string
};
export const projects_list: ProjectType[] = [
    {
        title: 'Basic Minecraft Implementation with Java',
        category: 'Game Dev',
        images_list: [
            minecraft_0
        ],
        date: 'Dec 2021 - Jan 2022',
        tags: ['Java', 'LWJGL', 'GLFW', 'OpenGL', 'GLSL', 'stb', 'Gradle'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/Minecraft_AE'}
        ],
        description: 'Basic Minecraft implementation with Java over the 2021 Christmas break. Implemented a custom rendering engine using OpenGL.'
    },

    {
        title: 'Party Physics Game',
        category: 'Game Dev',
        images_list: [
            party_physics0
        ],
        date: 'Dec 2022 - Jan 2023',
        tags: ['Java', 'Java2D', 'Dyn4J', 'Socket'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/PartyPhysics'}
        ],
        description: 'Designed a multiplayer game akin to Stick Fight, focusing on an immersive experience with interactive objects, dynamic graphics effects, such as particle systems, camera shakes, and smooth animation curves.'
    },

    {
        title: 'Robotic Arm Project',
        category: 'Hardware',
        images_list: [
            robotic_arm0
        ],
        date: 'Oct 2023 - Nov 2023',
        tags: ['STM32', 'C', 'Fusion 360', 'Cura'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/RoboticArm_V5'}
        ],
        description: 'Built a Robotic Arm using the STM32 Nucleo board. Made 5 iterations of designs, entirely 3D printed. Designed and optimized for 3D printing with Fusion 360. Coded the entire system in C.'
    },
    {
        title: 'Minecraft Remake in C++',
        category: 'Game Dev',
        images_list: [],
        date: 'Sept 2022',
        tags: ['C++', 'CMake', 'GLFW', 'OpenGL', 'GLSL', 'glu', 'stb'],
        links: [],
        description: 'Developed using the GLFW library and OpenGL. Fully cross-platform, written entirely in C++, and no memory leaks tested with valgrind.'
    },
    {
        title: 'Decide4Me Backend',
        category: 'Backend',
        images_list: [],
        date: 'April 2021',
        tags: ['Python', 'Flask', 'Firebase', 'GCP'],
        links: [],
        description: 'The backend of the Decide4Me project. Developed using Python, Flask, and Firebase. Collaborated within a team, working with a frontend developer, and won the "Best Use of Cloud Computing" award at YRHacks.'
    },
];