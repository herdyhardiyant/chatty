import React from "react"

import HorizontalLine from "../UI/HorizontalLine"
import Search from "../UI/Search"
import ChatTopMenu from "./ChatTopMenu"
import ChatList from "../ChatList"

/** 
 * Chat menu on the left side of the screen, See figma design
*/
const ChatSideBarMenu: React.FunctionComponent<{ className?: string }> = ({ className }) => {
    return (
        <div className={` bg-neutral-800 text-white h-screen border-r-4 border-r-neutral-500 overflow-hidden ${className}`}>
            <ChatTopMenu />
            <HorizontalLine />
            <Search />
            <HorizontalLine />
            <ChatList />
        </div>
    )
}

export default ChatSideBarMenu