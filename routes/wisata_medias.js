const express = require("express");
const router = express.Router();
const {
  getWisataWithMedias,
  getWisataWithMediasById,
} = require("../controllers/wisata_medias");
// const { getWisataWithMedias } = require("../controllers/wisata_medias");

router.get("/", getWisataWithMedias);
router.get("/:id", getWisataWithMediasById);

module.exports = router;
