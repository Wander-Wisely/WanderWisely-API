const express = require("express");
const router = express.Router();
const {
  getWisataWithFasilitasById,
  getWisataWithFasilitas,
} = require("../controllers/wisata_fasilitas");

router.get("/", getWisataWithFasilitas);
router.get("/:id", getWisataWithFasilitasById);

module.exports = router;
