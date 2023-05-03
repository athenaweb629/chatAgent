import * as React from 'react';
export interface IGiftedChatContext {
    actionSheet(): {
        showActionSheetWithOptions: (option?: any, cb?: any) => any;
    };
    getLocale(): string;
}
export declare const GiftedChatContext: React.Context<IGiftedChatContext>;
export declare const useChatContext: () => IGiftedChatContext;
