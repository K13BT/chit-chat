import { io } from "socket.io-client";

const URL =
  process.env.REACT_APP_NODE_ENV === "production"
    ? "https://chit-chat-c4d0.onrender.com/"
    : "http://localhost:8000";

console.log(process.env.REACT_APP_NODE_ENV);

export const socket = io(URL, {
  autoConnect: false,
});
