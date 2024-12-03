import { User } from '@configcat/sdk';
declare function __VLS_template(): {
    default?(_: {}): any;
    else?(_: {}): any;
    loading?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<{
    featureKey: string;
    userObject?: User;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    flagValueChanged: (newValue: boolean) => any;
}, string, import('vue').PublicProps, Readonly<{
    featureKey: string;
    userObject?: User;
}> & Readonly<{
    onFlagValueChanged?: ((newValue: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
