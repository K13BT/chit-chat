import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatForm from "./ChatForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ChatRoom = ({ setLoggedIn }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLeaveRoom = () => {
    setLoggedIn(false);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-10 min-h-screen p-4 relative">
      {showSidebar && (
        <div className="lg:hidden absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="h-full w-full bg-black opacity-80 z-10"></div>
          <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </div>
      )}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="relative col-span-3">
        <header className="flex justify-between items-center bg-black p-4 mb-4 rounded-lg">
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="lg:text-4xl md:text-2xl text-xl text-white">Trivia</h1>

          <button
            onClick={handleLeaveRoom}
            className="bg-white text-center text-black rounded-lg p-2 lg:p-3 text-lg justify-self-end"
          >
            Leave Chat
          </button>
        </header>

        <Messages />

        <ChatForm />
      </main>
    </div>
  );
};

export default ChatRoom;
