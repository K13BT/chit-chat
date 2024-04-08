import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <form
      className="flex text-lg gap-2 absolute bottom-5 right-0 left-0"
      onSubmit={handleMessageSubmit}
    >
      <input
        type="text"
        placeholder="write something..."
        className="border-2 border-slate-400 rounded-lg p-2 flex-grow"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button className="bg-black px-5 py-4 rounded-lg">
        <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
      </button>
    </form>
  );
};

export default ChatForm;
