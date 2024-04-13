import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { socket } from "../socket";
import { ChatContext } from "../App";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const { userInfo } = useContext(ChatContext);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("message", userInfo.room, message);
    }
    setMessage("");
  };

  return (
    <form
      className="flex text-lg gap-2 bg-white py-2 fixed bottom-0 right-0 lg:w-8/12 w-full"
      onSubmit={handleMessageSubmit}
    >
      <input
        type="text"
        placeholder="write something..."
        className="border-2 border-slate-400 rounded-lg p-2 flex-grow focus:outline-none focus:shadow-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        spellCheck="false"
      />
      <button className="bg-black px-5 py-4 rounded-lg">
        <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
      </button>
    </form>
  );
};

export default ChatForm;
