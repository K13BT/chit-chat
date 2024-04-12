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

const { rooms, Message } = require("./data");

io.on("connection", (socket) => {
  console.log("New connection.");
  socket.userRooms = [];

  socket.on("joinRoom", (username, room) => {
    socket.username = username;
    socket.userRooms = [...socket.userRooms, room];

    rooms[room].push({ username, room, id: socket.id });
    socket.join(room);
    const newMessage = new Message("bot", "", `${username} entered the chat`);
    io.to(room).emit("message", newMessage);
    io.to(room).emit("allUsers", rooms[room]);
  });

  socket.on("message", (room, message) => {
    const newMessage = new Message(socket.username, socket.id, message);
    io.to(room).emit("message", newMessage);
  });

  socket.on("disconnect", () => {
    socket.userRooms.forEach((room) => {
      const newMessage = new Message(
        "bot",
        "",
        `${socket.username} left the chat.`
      );
      socket.broadcast.to(room).emit("message", newMessage);
      const index = rooms[room].indexOf(socket.id);
      rooms[room].splice(index, 1);
      socket.broadcast.to(room).emit("allUsers", rooms[room]);
    });
  });
});

server.listen(8000, () => {
  console.log("Listening on PORT 8000");
});
