const express = require("express");
const router = express.Router();

const { getAllWisatas, getById } = require("../controllers/wisata");
// const { getAllDataFromTwoTables } = require("../controllers/wisata_fasilitas");

router.get("/", getAllWisatas);
// router.get("/d", getAllDataFromTwoTables);

router.get("/:id", getById);

module.exports = router;
