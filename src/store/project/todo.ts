import { defineStore } from 'pinia'

// export type HeaderT = typeof VDataTable['headers'];
export interface HeaderT {
    title: string;
    align: 'start' | 'center' | 'end' | undefined;
    minWidth?:number | undefined;
    key: string;
    sortable: boolean;
    mobileShow?: boolean;
}
export interface DataT {
    name: string,
    detail?: string | null,
    charge?: string | null,
    plannedStart?: string | null,
    actualStart?: string | null,
    plannedEnd?: string | null,
    actualEnd?: string | null,
    priority?: string | null,
    stage:'todo' | 'progress' | 'done'
}


//this is using in @/components/ItemHeader.vue to initiate filter items
export const todoItemStore = defineStore('todoItemStore', () => {
    const headers: HeaderT[] = [
        {
            title: '제목',
            align: 'start',
            minWidth:30, //%로 사용됨
            key: 'name',
            sortable: true,
            mobileShow: true,
        },
        {
            title: '담당자',
            align: 'center',
            key: 'charge',
            sortable: true,
            mobileShow: false,
        },
        {
            title: '착수예정',
            align: 'center',
            key: 'plannedStart',
            sortable: true,
            mobileShow: false,
        },
        {
            title: '시작일',
            align: 'center',
            key: 'actualStart',
            sortable: true,
            mobileShow: false,
        },
        {
            title: '완료예정',
            align: 'center',
            key: 'plannedEnd',
            sortable: true,
            mobileShow: false,
        },
        {
            title: '완료일',
            align: 'center',
            key: 'actualEnd',
            sortable: true,
            mobileShow: false,
        },
        {
            title: '중요도',
            align: 'center',
            key: 'priority',
            sortable: true,
            mobileShow: false,
        },
    ]
    const data: DataT[] = [
        {
            name: '건축 허가 절차 관리',
            detail:'aa',
            charge: '박서준',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage:'todo'
        },
        {
            name: '환경 영향 평가 관리',
            charge: '이종석',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '낮음',
            stage: 'todo'
        },
        {
            name: '착공 서류 제출 일정 관리',
            charge: '미지정',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '중간',
            stage: 'todo'
        },
        {
            name: '공종별 계약 실적 Data 정리',
            charge: '미지정',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'todo'
        },
        {
            name: '마일스톤 및 Baseline 공정표 승인',
            charge: '조인성',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'todo'
        },
        {
            name: '사업비 집행 계획 수립',
            charge: '손예진',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'todo'
        },
        {
            name: '주요 자재 조달 계획 승인',
            charge: '사쿠라',
            plannedStart: '2023-01-02',
            actualStart: null,
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'todo'
        },
        {
            name: '시설물 인수 인계서 승인',
            charge: '전지현',
            plannedStart: '2023-01-02',
            actualStart: '2023-01-05',
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'progress'
        },
        {
            name: '시운전 계획서 승인',
            charge: '에스파',
            plannedStart: '2023-01-02',
            actualStart: '2022-12-05',
            plannedEnd: null,
            actualEnd:null,
            priority: '높음',
            stage: 'progress'
        },
        {
            name: 'Inspect&Test Plan 승인',
            charge: '권은비',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: null,
            actualEnd:null,
            priority: '중간',
            stage: 'progress'
        },
        {
            name: '준공 절차 F/U',
            charge: '김채원',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:null,
            priority: '높음',
            stage: 'progress'
        },
        {
            name: '감리 월간 보고서 검토',
            charge: '아이린',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:null,
            priority: '높음',
            stage: 'progress'
        },
        {
            name: '업무 1',
            charge: '최예나',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:null,
            priority: '낮음',
            stage: 'done'
        },
        {
            name: '업무 2',
            charge: 'John',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:null,
            priority: '중간',
            stage: 'done'
        },
        {
            name: '업무 3',
            charge: 'Michel',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:null,
            priority: '높음',
            stage: 'done'
        },
        {
            name: '업무 4',
            charge: '황정민',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '중간',
            stage: 'done'
        },
        {
            name: '업무 5',
            charge: '조유리',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '높음',
            stage: 'done'
        },
        {
            name: '업무 6',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '높음',
            stage: 'done'
        },
        {
            name: '업무 7',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '낮음',
            stage: 'done'
        },
        {
            name: '업무 8',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '낮음',
            stage: 'done'
        },
        {
            name: '업무 9',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '높음',
            stage: 'done'
        },
        {
            name: '업무 10',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '낮음',
            stage: 'done'
        },
        {
            name: '업무 11',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '중간',
            stage: 'done'
        },
        {
            name: '업무 12',
            charge: '김나연',
            plannedStart: '2023-01-02',
            actualStart: '2023-02-05',
            plannedEnd: '2023-04-05',
            actualEnd:'2023-04-04',
            priority: '중간',
            stage: 'done'
        },
    ]

    const getHeader = (): HeaderT[] => {
        return headers;
    };
    const getTodo = (): DataT[] | null => {
        return data.filter(item => item.stage === 'todo');
    }
    const getInProgress = (): DataT[] | null => {
        return data.filter(item => item.stage === 'progress');
    }
    const getDone = (): DataT[] | null => {
        return data.filter(item => item.stage === 'done');
    }

    return {
        headers,
        getHeader,
        getTodo,
        getInProgress,
        getDone
    };
});
