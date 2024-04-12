const rooms = {
  Trivia: [],
  Technology: [],
  Games: [],
  Entertainment: [],
  Books: [],
  Fitness: [],
  Art: [],
  Music: [],
};

class Message {
  constructor(username, id, message) {
    this.username = username;
    this.id = id;
    this.message = message;
    this.time = new Date().toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

module.exports = { rooms, Message };
