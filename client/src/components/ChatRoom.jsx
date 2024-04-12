import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatForm from "./ChatForm";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../App";
import { socket } from "../socket";
import Header from "./Header";

const ChatRoom = ({ setLoggedIn }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { setMessages, messages, setUserInfo, setAllUsers } =
    useContext(ChatContext);
  const chatScroll = useRef();

  useEffect(() => {
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight - 200;
  }, [messages]);

  const handleLeaveRoom = () => {
    socket.disconnect();
    setLoggedIn(false);
    setMessages({
      Trivia: [],
      Technology: [],
      Games: [],
      Entertainment: [],
      Books: [],
      Fitness: [],
      Art: [],
      Music: [],
    });
    setAllUsers({
      Trivia: [],
      Technology: [],
      Games: [],
      Entertainment: [],
      Books: [],
      Fitness: [],
      Art: [],
      Music: [],
    });
    setUserInfo({});
  };

  return (
    <div className="grid lg:grid-cols-4 gap-10 h-full p-4 relative">
      {showSidebar && (
        <div className="lg:hidden absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="h-full w-full bg-black opacity-80 z-10"></div>
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </div>
      )}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="relative col-span-3" ref={chatScroll}>
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
