import minecraft_0 from './minecraft.png';
import minecraft_cpp0 from './minecraft_cpp.png';
import party_physics0 from './party_physics.png';
import robotic_arm0 from './robotic_arm.png';
import decide4me0 from './decide4me.png';
import soulknight0 from './soulknight.png';
import blender_project_car0 from './blender-project-car.png';
import blender_project_geometry_world0 from './blender-project.png';
import blender_project_su47 from './SU-47.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import soulknight_zip_file from './SoulKnight-Python_Clone.zip';
import how_to_make_games0 from './how_to_make_games.png';
import blender_iphone_paper0 from './blender_iphone_wallpaper.png';
import space_shooter_project0 from './spaceshooter-project.png';
import flappybird0 from './flappybird.png';

export type ProjectType = {
    title: string,
    date: string | undefined,
    category: 'Game Dev' | 'Frontend' | 'Backend' | 'Hardware' | '3D',
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
        images_list: [
            minecraft_cpp0
        ],
        date: 'Sept 2022',
        tags: ['C++', 'CMake', 'GLFW', 'OpenGL', 'GLSL', 'glu', 'stb'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/minecraft_cpp'}
        ],
        description: 'Developed using the GLFW library and OpenGL. Fully cross-platform, written entirely in C++, and no memory leaks tested with valgrind.'
    },
    {
        title: 'How to Make Games Tutorial',
        category: 'Game Dev',
        images_list: [
            how_to_make_games0
        ],
        date: 'May 2023',
        tags: ['Java', 'Processing'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/how_to_make_games'},
            {name: 'View', link: 'https://alexzihaoxu.github.io/how_to_make_games'},
        ],
        description: 'A tutorial that guides through the processing of making games from scratch using Java and Processing. Specifically made for my high school programming club. The content is written in Markdown using Typora, with animations implemented with p5.js.'
    },
    {
        title: 'Decide4Me Backend',
        category: 'Backend',
        images_list: [
            decide4me0
        ],
        date: 'April 2021',
        tags: ['Python', 'Flask', 'Firebase', 'GCP'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/decide4me_backend'},
            {name: 'Try', link: 'https://decide4me.pegas.is/'},
        ],
        description: 'The backend of the Decide4Me project. Developed using Python, Flask, and Firebase. Collaborated within a team, working with a frontend developer, and won the "Best Use of Cloud Computing" award at YRHacks.'
    },
    {
        title: 'SoulKnight Python Clone',
        category: 'Game Dev',
        images_list: [
            soulknight0
        ],
        date: 'July 2020',
        tags: ['Python', 'Pygame'],
        links: [
            {name: 'Download', link: soulknight_zip_file}
        ],
        description: 'Python clone of the SoulKnight game using the pygame library. It took me two weeks back in grade 9 during the pandemic. To enhance performance in gameplay, I implemented my own tile system, and used caching and python\'s threading to boost the framerate.'
    }, {
        title: 'Space Shooter Game',
        category: 'Game Dev',
        images_list: [
            space_shooter_project0
        ],
        date: 'May 2023',
        tags: ['Unity', 'C#'],
        links: [
            {name: 'Try', link: 'http://me.alex-xu.site:2000/'}
        ],
        description: 'The first unity game I ever made.'
    },
    {
        title: 'Lighthouse - iPhone Wallpaper',
        category: '3D',
        images_list: [
            blender_iphone_paper0
        ],
        date: 'Dec 2023',
        tags: ['Blender'],
        links: [
            {name: 'Link', link: blender_iphone_paper0}
        ],
        description: 'An iPhone wallpaper made in blender.'
    },
    {
        title: 'Low Poly Car',
        category: '3D',
        images_list: [
            blender_project_car0
        ],
        date: '2020',
        tags: ['Blender'],
        links: [
            {name: 'Link', link: blender_project_car0}
        ],
        description: 'A low-poly car modeled in blender back in grade 9.'
    },
    {
        title: 'SU-47',
        category: '3D',
        images_list: [
            blender_project_su47
        ],
        date: '2020',
        tags: ['Blender'],
        links: [
            {name: 'Link', link: blender_project_su47}
        ],
        description: 'A low-ploy SU-47 plane.'
    },
    {
        title: '"Geometry world"',
        category: '3D',
        images_list: [
            blender_project_geometry_world0
        ],
        date: '2022',
        tags: ['Blender'],
        links: [
            {name: 'Link', link: blender_project_geometry_world0}
        ],
        description: 'A low-ploy geometry world.'
    },
    {
        title: 'Flappy Bird JS',
        category: 'Game Dev',
        images_list: [
            flappybird0
        ],
        date: '2020',
        tags: ['Blender'],
        links: [
            {name: 'GitHub', link: 'https://github.com/AlexZihaoXu/flappybird.js'},
            {name: 'Try', link: 'https://alexzihaoxu.github.io/flappybird.js'}
        ],
        description: 'My first JavaScript Game coded in grade 10. (I didn\'t use delta time while calculating the physics, so might run too fast on high refresh rate monitors.)'
    },
];