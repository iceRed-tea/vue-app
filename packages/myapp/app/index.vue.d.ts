import { Personalize, AsideData } from '../index';
interface Props {
    personalize?: Personalize;
    type?: string;
    data: Array<any>;
    option?: object;
    background: string;
    logo?: string;
    router?: boolean;
    routerRoot?: string;
    isRootJump?: boolean;
    defaultAside?: Array<AsideData>;
    defaultData?: any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    personalize: () => {
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
    type: string;
    data: () => any[];
    option: () => {
        icon: string;
        title: string;
        color: string;
        component: string;
    };
    background: string;
    logo: string;
    router: boolean;
    routerRoot: string;
    isRootJump: boolean;
    defaultAside: () => any[];
    defaultData: () => {};
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    addSaveAside: (...args: any[]) => void;
    deleteAside: (...args: any[]) => void;
    addedClose: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    personalize: () => {
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
    type: string;
    data: () => any[];
    option: () => {
        icon: string;
        title: string;
        color: string;
        component: string;
    };
    background: string;
    logo: string;
    router: boolean;
    routerRoot: string;
    isRootJump: boolean;
    defaultAside: () => any[];
    defaultData: () => {};
}>>> & {
    onAddSaveAside?: (...args: any[]) => any;
    onDeleteAside?: (...args: any[]) => any;
    onAddedClose?: (...args: any[]) => any;
}, {
    personalize: Personalize;
    router: boolean;
    type: string;
    data: any[];
    option: object;
    background: string;
    logo: string;
    routerRoot: string;
    isRootJump: boolean;
    defaultAside: AsideData[];
    defaultData: any;
}, {}>, {
    icon?(_: {
        data: any;
    }): any;
    title?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
