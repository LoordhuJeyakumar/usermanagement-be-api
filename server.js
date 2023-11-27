const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const PORT = process.env.PORT || 7000;
server.use(middlewares);
server.use(router);
server.use(cors());
server.listen(PORT, () => {
  console.log(`JSON Server is running ${PORT}`);
});
