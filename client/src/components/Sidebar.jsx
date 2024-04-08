import { useState } from "react";
import { rooms } from "./Rooms";
import Profile from "./Profile";

const Sidebar = () => {
  const [displayUsers, setDisplayUsers] = useState(true);

  return (
    <aside className="relative">
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
          <li>John Doe</li>
          <li>Jane Doe</li>
        </ul>
      ) : (
        <menu id="rooms" className="grid gap-4">
          {rooms.map((room) => (
            <li className="">
              <button className="">{room}</button>
            </li>
          ))}
        </menu>
      )}

      <Profile />
    </aside>
  );
};

export default Sidebar;
