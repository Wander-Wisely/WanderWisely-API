const express = require("express");
const router = express.Router();

const { getAllFasilitas, getById } = require("../controllers/fasilitas");

router.get("/", getAllFasilitas);
router.get("/:id", getById);

module.exports = router;
