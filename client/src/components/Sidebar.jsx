import { useContext, useState } from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../App";
import { socket } from "../socket";
import { rooms } from "../rooms";

const Sidebar = ({ setShowSidebar }) => {
  const [displayUsers, setDisplayUsers] = useState(true);
  const { allUsers, userInfo, setUserInfo } = useContext(ChatContext);

  const handleRoomJoin = (newRoom) => {
    const user = allUsers[newRoom].find((user) => user.id === userInfo.id);
    setUserInfo({ ...userInfo, room: newRoom });
    if (user) {
      return;
    }
    socket.emit("joinRoom", userInfo.username, newRoom);
  };

  return (
    <aside className="lg:relative absolute h-full z-20 top-0 bottom-0 left-0 bg-white overflow-hidden">
      <button
        className="text-2xl my-5 lg:hidden"
        onClick={() => setShowSidebar(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setDisplayUsers(true)}
          className={`text-center text-white rounded-lg p-3 text-lg ${
            displayUsers ? "bg-gray-500" : "bg-black"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setDisplayUsers(false)}
          className={`text-center text-white rounded-lg p-3 text-lg ${
            !displayUsers ? "bg-gray-500" : "bg-black"
          }`}
        >
          Rooms
        </button>
      </div>

      {displayUsers ? (
        <ul className="py-5 grid gap-3">
          {allUsers[userInfo.room].map((user, index) => (
            <li
              className="text-lg border-b-2 p-1 border-b-gray-600"
              key={index}
            >
              {user.username}
            </li>
          ))}
        </ul>
      ) : (
        <menu id="rooms" className="grid gap-4 py-5">
          {rooms.map((room, index) => (
            <li className="text-lg bg-gray-200 p-1 rounded-md" key={index}>
              <button onClick={() => handleRoomJoin(room)} className="w-full">
                {room}
              </button>
            </li>
          ))}
        </menu>
      )}

      <Profile />
    </aside>
  );
};

export default Sidebar;
