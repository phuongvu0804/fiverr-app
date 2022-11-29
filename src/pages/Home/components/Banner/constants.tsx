interface BgItemType {
    name: string;
    job: string;
    className: string[];
    style?: any;
}

export const bgList: BgItemType[] = [
    {
        name: 'Andrea',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--andrea', 'active'],
    },
    {
        name: 'Moon',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--moon'],
    },
    {
        name: 'Ritika',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--ritika'],
    },
    {
        name: 'Zach',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--zach'],
    },
    {
        name: 'Gabrielle',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--gabrielle'],
    },
];
