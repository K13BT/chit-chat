import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

const ChatRoom = ({ setLoggedIn }) => {
  const handleLeaveRoom = () => {
    setLoggedIn(false);
  };

  return (
    <div className="grid grid-cols-4 gap-10 min-h-screen p-4">
      <Sidebar className="" />
      <main className="relative col-span-3">
        <header className="flex justify-between bg-black p-4 mb-4 rounded-lg">
          <h1 className="mx-auto text-4xl text-white">Trivia</h1>

          <button
            onClick={handleLeaveRoom}
            className="bg-white text-center text-black rounded-lg p-3 text-lg justify-self-end"
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
