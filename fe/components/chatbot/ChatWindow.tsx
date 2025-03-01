"use client";
import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatWindow = () => {
    const [chatMessages, setChatMessages] = useState<
        Array<{ role: string; message: string }>
    >([]);

    return (
        <div id="chat-window" className="relative">
            <ChatRoom messages={chatMessages} setMessages={setChatMessages} />
        </div>
    );
};

export default ChatWindow;
