

require("@babel/register");
require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");
const { sequelize } = require("./db/models");
const { Telephone } = require("./db/models");

const app = express();
const server = http.createServer(app);


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

serverConfig(app);
app.use("/", indexRouter);

io.on("connection", socket => {
  console.log("Новое соединение", socket.id);

  socket.on("message", async (message) => {
    console.log("полученные данные", message);
    const { code, number, countryName, flag } = message;
    try {
      const newTelephone = await Telephone.create({
        code,
        number,
        countryName,
        flag,
      });
      console.log("Создан телефон:", newTelephone);

      io.emit("message", newTelephone);
      console.log("Событие newTelephone создано:", newTelephone);
    } catch (error) {
      console.error("Ошибка при создании нового телефона:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Соединение отключено", socket.id);
  });
});



serverConfig(app);

app.use("/", indexRouter);


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с базой данных установлено успешно");
    const PORT = process.env.PORT || 4000;
    server.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (error) {
    console.error("Ошибка при подключении к базе данных:", error);
  }
}
// const PORT = process.env.PORT ?? 4000;
startServer();
module.exports = { io };
