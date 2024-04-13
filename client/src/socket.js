import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.URL
    : "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});
