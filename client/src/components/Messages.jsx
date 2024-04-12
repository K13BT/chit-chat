import { useContext } from "react";
import { ChatContext } from "../App";

const Messages = () => {
  const { messages, userInfo } = useContext(ChatContext);

  return (
    <div>
      <ul className="grid">
        {messages[userInfo.room].map((message, index) => (
          <li key={index}>
            <div className="bg-slate-200">
              <span>{message.username}</span>
              <span>{message.time}</span>
            </div>

            <p className="py-2 px-4 rounded-lg">{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
