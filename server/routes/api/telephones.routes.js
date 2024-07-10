const router = require("express").Router();
const { ValidationError } = require("sequelize");
const { Telephone } = require("../../db/models");

router.route("/").get((req, res) => {
  Telephone.findAll()
    .then(allTelephones => res.json({ telephones: allTelephones }))
    .catch(error => res.status(500).json(error));
});

router.route("/").post(async (req, res) => {
  try {
    const newTelephone = await Telephone.create(req.body);
    console.log(newTelephone);
    res.status(201).json(newTelephone);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
