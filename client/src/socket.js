import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://chit-chat-c4d0.onrender.com/"
    : "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});
