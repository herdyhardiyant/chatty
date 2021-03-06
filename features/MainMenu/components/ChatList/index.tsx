import * as React from 'react';
import ChatItem from './ChatItem';

/** 
 * Chat list for chat menu subcomponent, see figma design
*/
function ChatList() {
    return (
        <div className='flex flex-col h-full overflow-scroll'>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />

        </div>
    );
}

export default ChatList;