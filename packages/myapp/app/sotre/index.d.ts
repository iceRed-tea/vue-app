import { Personalize, AsideData } from '../../index';
interface RightMenu {
    event: any;
    type: string;
    data: any;
}
interface EditMenu {
    isEdit: boolean;
    editType: string;
}
export declare const useMainStore: import("pinia").StoreDefinition<"main", {
    rootJump: boolean;
    root: string;
    isExpand: boolean;
    isEdit: boolean;
    mask: boolean;
    searchMask: boolean;
    openIcon: boolean;
    searchData: string;
    drawer: boolean;
    current: number;
    ismobile: any;
    appData: any;
    asideEidt: boolean;
    asideValue: string;
    asideData: AsideData[];
    appType: string;
    optionData: any;
    allData: any;
    activeData: any;
    isRouter: boolean;
    isrightMenu: boolean;
    rightMenu: RightMenu;
    editMenu: EditMenu;
    NewPage: any;
    oldPreview: any;
    deleteTask: any;
    openItemPage: any;
    editAsideIcon: any;
    openNewPage: any;
    formData: Personalize;
}, {
    updataRightMenu: (state: {
        rootJump: boolean;
        root: string;
        isExpand: boolean;
        isEdit: boolean;
        mask: boolean;
        searchMask: boolean;
        openIcon: boolean;
        searchData: string;
        drawer: boolean;
        current: number;
        ismobile: any;
        appData: any;
        asideEidt: boolean;
        asideValue: string;
        asideData: {
            icon: string;
            value: string;
            element: boolean;
            isUrl: boolean;
        }[];
        appType: string;
        optionData: any;
        allData: any;
        activeData: any;
        isRouter: boolean;
        isrightMenu: boolean;
        rightMenu: {
            event: any;
            type: string;
            data: any;
        };
        editMenu: {
            isEdit: boolean;
            editType: string;
        };
        NewPage: any;
        oldPreview: any;
        deleteTask: any;
        openItemPage: any;
        editAsideIcon: any;
        openNewPage: any;
        formData: {
            iconOpenWay: boolean;
            iconGrap: string;
            hiddenTitle: boolean;
            isScrollPage: boolean;
            searchOpenWay: boolean;
            searchHistory: boolean;
            showIcon: boolean;
            asideLast: boolean;
            MaxTask: number;
            background?: any;
            iconGap?: any;
        };
    } & import("pinia").PiniaCustomStateProperties<{
        rootJump: boolean;
        root: string;
        isExpand: boolean;
        isEdit: boolean;
        mask: boolean;
        searchMask: boolean;
        openIcon: boolean;
        searchData: string;
        drawer: boolean;
        current: number;
        ismobile: any;
        appData: any;
        asideEidt: boolean;
        asideValue: string;
        asideData: AsideData[];
        appType: string;
        optionData: any;
        allData: any;
        activeData: any;
        isRouter: boolean;
        isrightMenu: boolean;
        rightMenu: RightMenu;
        editMenu: EditMenu;
        NewPage: any;
        oldPreview: any;
        deleteTask: any;
        openItemPage: any;
        editAsideIcon: any;
        openNewPage: any;
        formData: Personalize;
    }>) => {
        event: any;
        type: string;
        data: any;
    };
    updataNewPage: (state: {
        rootJump: boolean;
        root: string;
        isExpand: boolean;
        isEdit: boolean;
        mask: boolean;
        searchMask: boolean;
        openIcon: boolean;
        searchData: string;
        drawer: boolean;
        current: number;
        ismobile: any;
        appData: any;
        asideEidt: boolean;
        asideValue: string;
        asideData: {
            icon: string;
            value: string;
            element: boolean;
            isUrl: boolean;
        }[];
        appType: string;
        optionData: any;
        allData: any;
        activeData: any;
        isRouter: boolean;
        isrightMenu: boolean;
        rightMenu: {
            event: any;
            type: string;
            data: any;
        };
        editMenu: {
            isEdit: boolean;
            editType: string;
        };
        NewPage: any;
        oldPreview: any;
        deleteTask: any;
        openItemPage: any;
        editAsideIcon: any;
        openNewPage: any;
        formData: {
            iconOpenWay: boolean;
            iconGrap: string;
            hiddenTitle: boolean;
            isScrollPage: boolean;
            searchOpenWay: boolean;
            searchHistory: boolean;
            showIcon: boolean;
            asideLast: boolean;
            MaxTask: number;
            background?: any;
            iconGap?: any;
        };
    } & import("pinia").PiniaCustomStateProperties<{
        rootJump: boolean;
        root: string;
        isExpand: boolean;
        isEdit: boolean;
        mask: boolean;
        searchMask: boolean;
        openIcon: boolean;
        searchData: string;
        drawer: boolean;
        current: number;
        ismobile: any;
        appData: any;
        asideEidt: boolean;
        asideValue: string;
        asideData: AsideData[];
        appType: string;
        optionData: any;
        allData: any;
        activeData: any;
        isRouter: boolean;
        isrightMenu: boolean;
        rightMenu: RightMenu;
        editMenu: EditMenu;
        NewPage: any;
        oldPreview: any;
        deleteTask: any;
        openItemPage: any;
        editAsideIcon: any;
        openNewPage: any;
        formData: Personalize;
    }>) => any;
}, {}>;
export {};
