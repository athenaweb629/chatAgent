import * as React from 'react';
import { ViewProps } from 'react-native';
import { ActionSheetOptions } from '../types';
interface State {
    isVisible: boolean;
    isAnimating: boolean;
    options: ActionSheetOptions | null;
    onSelect: ((i: number) => void) | null;
    overlayOpacity: any;
    sheetOpacity: any;
}
export interface Props {
    readonly children: React.ReactNode;
    readonly useNativeDriver?: boolean;
    readonly pointerEvents?: ViewProps['pointerEvents'];
}
export default class CustomActionSheet extends React.Component<Props, State> {
    _actionSheetHeight: number;
    state: State;
    _deferAfterAnimation?: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _handleWebKeyDown: (event: KeyboardEvent) => void;
    _setActionSheetHeight: ({ nativeEvent }: any) => any;
    render(): JSX.Element;
    _renderSheet(): JSX.Element | null;
    showActionSheetWithOptions: (options: ActionSheetOptions, onSelect: (i: number) => void) => void;
    _selectCancelButton: () => boolean;
    _onSelect: (index: number) => boolean;
    _animateOut: () => boolean;
}
export {};
