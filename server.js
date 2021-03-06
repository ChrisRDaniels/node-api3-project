const express = require("express");
const helmet = require("helmet");

const server = express();

server.get("/", (req, res) => {
 res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
 console.log(
  `Logger: [${new Date().toISOString()}] ${req.method} to ${req.originalUrl}`
 );
 next();
}

server.use(helmet());
server.use(express.json());
server.use(logger);

module.exports = server;
