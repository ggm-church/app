export const MenuList = [
    {
        name: 'home',
        title: 'Home',
        url: 'home',
        subMenu: [],
        icon: ''
    },
    {
        name: 'about',
        title: 'About',
        url: 'about',
        subMenu: [],
        icon: ''
    },
    {
        name: 'prayer',
        title: 'Prayer',
        url: 'prayer',
        subMenu: [],
        icon: ''
    },
    {
        name: 'bible',
        title: 'Bible',
        url: 'bible',
        subMenu: [],
        icon: ''
    }
]

export interface MenuListModel {
    name: string,
    title: string,
    url: string,
    subMenu: Array<MenuListModel>,
    icon: string
}