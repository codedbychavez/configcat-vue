import { type User } from "configcat-common";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    featureKey: {
        type: import("vue").PropType<string>;
        required: true;
    };
    userObject: {
        type: import("vue").PropType<User>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    flagValueChanged: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    featureKey: {
        type: import("vue").PropType<string>;
        required: true;
    };
    userObject: {
        type: import("vue").PropType<User>;
    };
}>> & {
    onFlagValueChanged?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
    else?(_: {}): any;
    loading?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
