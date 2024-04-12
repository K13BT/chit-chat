import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { socket } from "./socket";

export const ChatContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [allUsers, setAllUsers] = useState({
    Trivia: [],
    Technology: [],
    Games: [],
    Entertainment: [],
    Books: [],
    Fitness: [],
    Art: [],
    Music: [],
  });
  const [messages, setMessages] = useState({
    Trivia: [],
    Technology: [],
    Games: [],
    Entertainment: [],
    Books: [],
    Fitness: [],
    Art: [],
    Music: [],
  });

  useEffect(() => {
    const newUserJoin = (message) => {
      const newMessages = {
        ...messages,
        [userInfo.room]: [...messages[userInfo.room], message],
      };
      setMessages(newMessages);
    };

    const getAllUsers = (users) => {
      const newUsers = {
        ...allUsers,
        [userInfo.room]: users,
      };
      setAllUsers(newUsers);
      console.log(users);
    };

    const userLeave = (message) => {
      const newMessages = {
        ...messages,
        [userInfo.room]: [...messages[userInfo.room], message],
      };
      setMessages(newMessages);
      console.log(newMessages);
    };

    socket.on("newUserJoin", newUserJoin);
    socket.on("allUsers", getAllUsers);
    socket.on("userLeave", userLeave);

    return () => {
      socket.off("newUserJoin", newUserJoin);
      socket.off("allUsers", allUsers);
      socket.off("userLeave", userLeave);
    };
  }, [userInfo]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        userInfo,
        setUserInfo,
        allUsers,
        setMessages,
        setAllUsers,
      }}
    >
      <div className="relative min-h-screen">
        {loggedIn ? (
          <ChatRoom setLoggedIn={setLoggedIn} />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      </div>
    </ChatContext.Provider>
  );
}

export default App;
