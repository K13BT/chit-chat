import { useState } from "react";
import { rooms } from "./Sidebar";
import { socket } from "../socket";
import { useContext } from "react";
import { ChatContext } from "../App";

const LoginForm = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("Trivia");
  const { setUserInfo } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username) {
      setLoggedIn(true);
      socket.connect();
      socket.emit("joinRoom", username, room);
      setUserInfo({ username, room });
    }

    setUsername("");
    setRoom("Trivia");
  };

  return (
    <form className="grid gap-10" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-center p-2 focus:outline-none focus:shadow-lg"
        placeholder="Enter a username..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />

      <select
        className="text-center"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      >
        {rooms.map((room, index) => (
          <option key={index} value={room} className="p-2">
            {room}
          </option>
        ))}
      </select>

      <button className="bg-black text-center text-white rounded-lg p-3 text-lg">
        Join Room
      </button>
    </form>
  );
};

export default LoginForm;
