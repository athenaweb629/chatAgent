import * as React from 'react';
export const GiftedChatContext = React.createContext({
    getLocale: () => 'en',
    actionSheet: () => ({
        showActionSheetWithOptions: () => { },
    }),
});
export const useChatContext = () => React.useContext(GiftedChatContext);
//# sourceMappingURL=GiftedChatContext.js.map