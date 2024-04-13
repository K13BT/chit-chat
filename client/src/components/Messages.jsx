import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../App";

const Messages = () => {
  const { messages, userInfo } = useContext(ChatContext);

  const chatScroll = useRef();

  useEffect(() => {
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  }, [messages]);

  return (
    <div
      className=" absolute top-20 bottom-20 py-2 right-0 left-0 p-1 overflow-y-auto"
      ref={chatScroll}
    >
      <ul className="grid gap-y-5">
        {messages[userInfo.room].map((message, index) => (
          <li
            key={index}
            className={`${
              message.id === userInfo.id
                ? "justify-self-end bg-black text-white"
                : message.id === ""
                ? "justify-self-center bg-gray-100"
                : "justify-self-start bg-gray-200"
            } rounded-md py-2 px-4`}
          >
            <div className="font-semibold text-sm">
              <span
                className={`${
                  message.id === "" && "hidden"
                } mr-2 text-blue-700`}
              >
                {message.id === userInfo.id ? "You" : message.username}
              </span>
              <span className="text-gray-500 text-xs">{message.time}</span>
            </div>

            <p className="">{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
