import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({
    children
}: {
    children : React.ReactNode
}) {
    const conversations = await getConversations();
    const users = await getUsers()
    return (
    <Sidebar>
        <div className="h-screen">
            <ConversationList initialItems={conversations} users={users}/>
            {children}
        </div>
    </Sidebar>
    )
}