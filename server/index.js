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
  socket.userRooms = [];

  socket.on("joinRoom", (username, room) => {
    socket.username = username;
    socket.userRooms = [...socket.userRooms, room];

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
    socket.userRooms.forEach((room) => {
      socket.broadcast.to(room).emit("userLeave", {
        username: "bot",
        id: socket.id,
        message: `${socket.username} left the chat.`,
      });
      const index = rooms[room].indexOf(socket.username);
      rooms[room].splice(index, 1);
      socket.broadcast.to(room).emit("allUsers", rooms[room]);
    });
    console.log(rooms);
  });
});

server.listen(8000, () => {
  console.log("listening on PORT 3000");
});
