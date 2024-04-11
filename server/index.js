const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const { rooms } = require("./data");

io.on("connection", (socket) => {
  console.log("New connection.");

  socket.on("joinRoom", (username, room) => {
    rooms[room].push({ username, room });
    socket.join(room);
    io.to(room).emit("newUserJoin", {
      username,
      time: new Date().toLocaleTimeString(),
      message: `${username} entered the chat.`,
    });

    io.to(room).emit("allUsers", rooms[room]);
    console.log(rooms);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected.");
  });
});

server.listen(8000, () => {
  console.log("listening on PORT 3000");
});
