// code away!
const server = require("./server");
const port = 4000;

const postRouter = require("./posts/postRouter");
server.use("/api/posts", postRouter);

const userRouter = require("./users/userRouter");
server.use("/api/users", userRouter);

server.listen({ port }, () => {
 console.log(`* Server Running on http://localhost:${port} *`);
});
