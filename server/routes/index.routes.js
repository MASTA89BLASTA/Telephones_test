const router = require("express").Router();

const telephonesRouter = require("./api/telephones.routes");

router.use("/api/telephones", telephonesRouter);

module.exports = router;
