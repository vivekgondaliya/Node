const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "https://" });
  }
}

module.exports = Logger;
