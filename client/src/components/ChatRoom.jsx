import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatForm from "./ChatForm";
import { useState } from "react";
import { socket } from "../socket";
import Header from "./Header";

const ChatRoom = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLeaveRoom = () => {
    socket.disconnect();
  };

  return (
    <div className="flex justify-between h-full relative overflow-hidden">
      {showSidebar && (
        <div className="lg:hidden absolute top-0 bottom-0 left-0 right-0 z-30">
          <div className="h-full w-full bg-black opacity-80"></div>
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </div>
      )}
      <div className="hidden lg:block w-3/12">
        <Sidebar />
      </div>
      <main className="relative lg:w-8/12 w-full">
        <Header
          handleLeaveRoom={handleLeaveRoom}
          setShowSidebar={setShowSidebar}
        />
        <Messages />
        <ChatForm />
      </main>
    </div>
  );
};

export default ChatRoom;
