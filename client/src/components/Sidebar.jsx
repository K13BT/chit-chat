import { useContext, useState } from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../App";
import { socket } from "../socket";

export const rooms = [
  "Trivia",
  "Technology",
  "Games",
  "Entertainment",
  "Books",
  "Fitness",
  "Art",
  "Music",
];

const Sidebar = ({ setShowSidebar }) => {
  const [displayUsers, setDisplayUsers] = useState(true);
  const { allUsers, userInfo, setUserInfo } = useContext(ChatContext);

  const handleRoomJoin = (newRoom) => {
    socket.emit("joinRoom", userInfo.username, newRoom);
    setUserInfo({ ...userInfo, room: newRoom });
  };

  return (
    <aside className="lg:relative absolute h-full z-20 top-0 bottom-0 left-0 bg-white lg:p-0 p-4">
      <button
        className="text-2xl my-5 lg:hidden"
        onClick={() => setShowSidebar(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setDisplayUsers(true)}
          className="bg-black text-center text-white rounded-lg p-3 text-lg"
        >
          Users
        </button>
        <button
          onClick={() => setDisplayUsers(false)}
          className="bg-black text-center text-white rounded-lg p-3 text-lg"
        >
          Rooms
        </button>
      </div>

      {displayUsers ? (
        <ul>
          {allUsers[userInfo.room].map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <menu id="rooms" className="grid gap-4">
          {rooms.map((room, index) => (
            <li className="" key={index}>
              <button className="" onClick={() => handleRoomJoin(room)}>
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
