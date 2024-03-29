import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

export interface ContentsItem {
    index: number;
    name: string;
    title: string;
    visible: boolean;
}

interface categoryForItemState {
    [index: string]: string[];
}

interface ContentStoreState {
    [index: string]: ContentsItem[];
}

//this is using in @/components/ItemHeader.vue to initiate filter items
export const categoryForItemStore = defineStore('categoryForItemStore', () => {
    const categoryForItem: categoryForItemState = {
        timeline: ['on Schedule', 'Lagging', 'Leading', 'Not Due'],
        todo: ['사업주 요청', 'CM 요청(본사)', 'CM 요청(현장)'],
        inprogress:['사업주 요청', 'CM 요청(본사)', 'CM 요청(현장)'],
        done:['사업주 요청', 'CM 요청(본사)', 'CM 요청(현장)'],
        progresscurve: ['BaseLine1', 'BaseLine2', 'BaseLine3', 'BaseLine4']
    };

    const getCategory = (name: string): string[] => {
        return categoryForItem[name];
    };

    return {
        categoryForItem,
        getCategory,
    };
});


//this is using @/layouts/ItemHeader.vue to initiate filter items
export const contentStore = defineStore('contentStore', () => {
    // Not used. if it needed to 
    // const contentGeneralData = {
    //     index:0,
    //     name:'general',
    //     title:'GENERAL',
    //     visible:true
    // }
    // router name is using as a key value of contentData, and get menu items of each page such as Home, Quality, and Schedule
    // if headoffice page added, contentData shall be updated
    const contentData = {
        ProjectHome: [
            {
                index:0,
                name:'projectList',
                title:'My Projects',
                visible:true
            },
            {
                index:1,
                name:'qualityStatus',
                title:'품질관리 현황',
                visible:false
            },
            {
                index:2,
                name:'scheduleStatus',
                title:'공정관리 현황',
                visible:false
            },
        ],
        ProjectQuality: [
            {
                index:0,
                name:'general',
                title:'GENERAL',
                visible:true
            },
            {
                index:1,
                name:'timeline',
                title:'TIMELINE',
                visible:false
            },
            {
                index: 2,
                name: 'todostatic',
                title: 'TODO STATIC',
                visible: false
            },
            {
                index: 3,
                name: 'todo',
                title: 'TODO',
                visible: false
            },
            {
                index: 4,
                name: 'inprogress',
                title: 'IN PROGRESS',
                visible: false
            },
            {
                index: 5,
                name: 'done',
                title: 'DONE',
                visible: false
            },
        ],
        ProjectSchedule: [
            {
                index:0,
                name:'general',
                title:'GENERAL',
                visible:true
            },
            {
                index:1,
                name:'timeline',
                title:'TIMELINE',
                visible:false
            },
            {
                index:2,
                name:'schedulemanagement',
                title:'SCHEDULE MANAGEMENT',
                visible:false
            },
            {
                index: 3,
                name: 'progresscurve',
                title: 'S-CURVE',
                visible: false
            },
            {
                index: 4,
                name: 'taskstatus',
                title: 'TaskStatus',
                visible: false
            },
            {
                index: 5,
                name: 'gantt',
                title: 'GANTT',
                visible: false
            },
        ],
    };
    const contentForRoute:Ref<ContentStoreState> = ref(contentData)
    // const contentGeneral:Ref<ContentsItem> = ref(contentGeneralData)
    const getContentList = (routeName: string): ContentsItem[] => {
        return contentForRoute.value[routeName];
    };
    function setContent(routeName: string, index: number): void {
        contentForRoute.value[routeName][index]['visible'] = !contentForRoute.value[routeName][index]['visible']
    }
    // function toggleGeneralContent():void {
    //     contentGeneral.value['visible'] = !contentGeneral.value['visible']
    // }
    return {
        contentForRoute,
        getContentList,
        setContent,
        // contentGeneral,
        // toggleGeneralContent
    }
})