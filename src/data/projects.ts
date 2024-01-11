export const projects_list: {
    title: string,
    date: string | undefined,
    category: 'Game Dev' | 'Frontend' | 'Backend' | 'Hardware',
    tags: string[],
    images_list: string[],
    buttons: {
        name: string,
        link: string
    }[],
    description: string
}[] = [
    {
        title: 'Basic Minecraft Implementation with Java',
        category: 'Game Dev',
        images_list: [],
        date: 'Dec 2021 - Jan 2022',
        tags: ['Java', 'LWJGL', 'GLFW', 'OpenGL', 'GLSL', 'stb', 'Gradle'],
        buttons: [],
        description: 'No Description'
    },
    {
        title: 'Minecraft Remake in C++',
        category: 'Game Dev',
        images_list: [],
        date: 'Sept 2022',
        tags: ['C++', 'CMake', 'GLFW', 'OpenGL', 'GLSL', 'glu', 'stb'],
        buttons: [],
        description: 'No Description'
    },
    {
        title: 'Party Physics Game',
        category: 'Game Dev',
        images_list: [],
        date: 'Dec 2022 - Jan 2023',
        tags: ['Java', 'Java2D', 'Dyn4J', 'Socket'],
        buttons: [],
        description: 'No Description'
    },
    {
        title: 'Decide4Me Backend',
        category: 'Backend',
        images_list: [],
        date: 'April 2021',
        tags: ['Python', 'Flask', 'Firebase', 'GCP'],
        buttons: [],
        description: 'No Description'
    },
    {
        title: 'Robotic Arm Project',
        category: 'Hardware',
        images_list: [],
        date: 'Dec 2021 - Jan 2022',
        tags: ['STM32', 'C', 'Fusion 360', 'Cura'],
        buttons: [],
        description: 'No Description'
    },
];