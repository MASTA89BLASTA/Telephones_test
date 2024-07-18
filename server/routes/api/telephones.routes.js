const router = require("express").Router();
const { ValidationError } = require("sequelize");
const { Telephone } = require("../../db/models");

router.route("/").get(async (req, res) => {
  try {
    const allTelephones = await Telephone.findAll();
    res.json(allTelephones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.route("/").post(async (req, res) => {
  const { code, number, countryName, flag } = req.body;
  if (!code || !number || !countryName) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    console.log("Received data:", req.body);

    const newTelephone = await Telephone.create({
      code: code,
      number,
      countryName: countryName,
      flag,
    });
    console.log("Created telephone:", newTelephone);
    res.status(201).json(newTelephone);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
