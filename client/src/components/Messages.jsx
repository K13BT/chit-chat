import { useContext } from "react";
import { ChatContext } from "../App";

const Messages = () => {
  const { messages, userInfo } = useContext(ChatContext);

  return (
    <ul className="grid grid-cols-2 gap-y-5">
      {messages[userInfo.room].map((message, index) => (
        <li
          key={index}
          className={`${
            message.id === userInfo.id
              ? "justify-self-end col-start-2 bg-black text-white"
              : message.id === ""
              ? "justify-self-center col-span-2 bg-gray-100"
              : "justify-self-start bg-gray-200"
          } rounded-md py-2 px-4`}
        >
          <div className="font-semibold text-sm">
            <span
              className={`${message.id === "" && "hidden"} mr-2 text-blue-700`}
            >
              {message.id === userInfo.id ? "You" : message.username}
            </span>
            <span className="text-gray-500">{message.time}</span>
          </div>

          <p className="">{message.message}</p>
        </li>
      ))}
    </ul>
  );
};

export default Messages;
