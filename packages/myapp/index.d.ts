import { defineComponent } from 'vue';
declare const _default: {
    install(vue: ReturnType<typeof defineComponent>): void;
};
export default _default;
export declare const defaultPersonalize: {
    iconOpenWay: boolean;
    iconGrap: string;
    hiddenTitle: boolean;
    isScrollPage: boolean;
    searchOpenWay: boolean;
    searchHistory: boolean;
    showIcon: boolean;
    asideLast: boolean;
    MaxTask: number;
    background: {
        title: string;
        data: ({
            title: string;
            value: number;
            percentage: boolean;
            tooltip: boolean;
            min?: undefined;
            max?: undefined;
        } | {
            title: string;
            value: number;
            percentage: boolean;
            min: number;
            max: number;
            tooltip: boolean;
        })[];
    };
    iconGap: {
        title: string;
        data: {
            title: string;
            value: number;
            tooltip: boolean;
            min: number;
            max: number;
            marks: {
                10: string;
                40: string;
            };
        }[];
    };
};
export interface Personalize {
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
}
export interface AsideData {
    icon: string;
    value: string;
    element: boolean;
    isUrl: boolean;
}
