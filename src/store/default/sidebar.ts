import { defineStore } from 'pinia'

export interface MenuItem {
    icon?: string,
    text: string,
    link?: string,
    children?: MenuItem[],
}
interface MenuState {
    [index: string]: MenuItem[],
}
export const sidebarStore = defineStore('sidebarStore', () => {
    const getMenus = <MenuItem>(category: string) => {
        return sidebarItems[category]
    }
    const sidebarItems: MenuState = {
        headoffice: [
            {
                icon: 'mdi-home-outline',
                text: 'Home',
                link: '/headoffice',
            },
            {
                icon: 'mdi-format-list-checks',
                text: '품질관리',
                link: '/headoffice/quality',
            },
            {
                icon: 'mdi-chart-timeline',
                text: '공정관리',
                link: '/headoffice/schedule',
            },
            {
                text: 'Test1',
                children: [
                    {
                        text: 'Test1-1',
                        link: '/process'
                    },
                    {
                        text: 'Test1-2',
                        link: '/design',
                        children: [
                            {
                                text: 'Test1-2-1',
                                link: '/aa'
                            },
                            {
                                text: 'Test1-2-2',
                                link: '/ab',
                                children: [
                                    {
                                        text: 'Test1-2-2-1',
                                        link: '/asdg'
                                    },
                                    {
                                        text: 'Test1-2-2-2',
                                        link: '/asdsdfg'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }

        ],
        project: [
            {
                icon: 'mdi-home-outline',
                text: 'Home',
                link: '/project',
            },
            {
                icon: 'mdi-format-list-checks',
                text: '품질관리',
                link: '/project/quality',
            },
            {
                icon: 'mdi-chart-timeline',
                text: '공정관리',
                link: '/project/schedule'
            }
        ]
    }
    return {
        sidebarItems,
        getMenus
    }
})