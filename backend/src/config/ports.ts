
export interface IPortFrontend{
    id: number | string;
    name: string;
    port: number | null;
}


export const portsFrontend: IPortFrontend[] = [
    {
        id: 0,
        name: "Angular",
        port: 4200
    },
    {
        id: 1,
        name: "React and Vue.js using Vite",
        port: 5173
    },
    {
        id: 2,
        name: "Vue.js",
        port: 8080
    },
    {
        id: 3,
        name: "Create React App and Next.JS",
        port: 3000
    },
    {
        id: 4,
        name: "Svelte",
        port: 3000
    },
    {
        id: 5,
        name: "Ember.js",
        port: 4200
    },
    {
        id: 6,
        name: "Nuxt.js",
        port: 3000
    },
    {
        id: 7,
        name: "Quasar (Vue.js)",
        port: 3000
    },
    {
        id: 8,
        name: "Gatsby",
        port: 8080
    }
];