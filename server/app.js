require("@babel/register");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");

const app = express();
app.use(cors());
app.use(express.json()); 

serverConfig(app);

app.use("/", indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});

// require("@babel/register");
// require("dotenv").config();
// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const serverConfig = require("./config/serverConfig");
// const indexRouter = require("./routes/index.routes");
// const { sequelize } = require("./db/models");
// const { Telephone } = require("./db/models");

// const app = express();
// const server = http.createServer(app);

// const io = socketIo(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
//   },
// });

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
//   })
// );

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", indexRouter);
// serverConfig(app);

// io.on("connection", socket => {
//   console.log("Новое соединение", socket.id);

//   socket.on("message", async message => {
//     console.log("Сообщение", message);
//     const { code, number, country, flag } = message;
//     const newTelephone = await Telephone.create({
//       code,
//       number,
//       country,
//       flag,
//     });
//     io.emit("message", newTelephone);
//   });

//   socket.on("disconnect", () => {
//     console.log("Отключено");
//   });
// });

// const PORT = process.env.PORT ?? 4000;


// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Соединение успешно установлено");
//     app
//       .listen(PORT, () => console.log(`Сервер слушает порт ${PORT}`))
//       .on("error", error => console.log("Ошибка при запуске сервера", error));
//   } catch (error) {
//     console.error("Невозможно подключиться к базе данных", error);
//   }
// }

// testConnection();
