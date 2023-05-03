import * as React from 'react';
import { ActionSheetProviderRef } from './types';
interface Props {
    children: React.ReactNode;
    useNativeDriver?: boolean;
    useCustomActionSheet?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<ActionSheetProviderRef>>;
export default _default;
