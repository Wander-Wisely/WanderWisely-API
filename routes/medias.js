const express = require("express");
const router = express.Router();

const { getAllMedias, getById } = require("../controllers/medias");

router.get("/", getAllMedias);
router.get("/:id", getById);

module.exports = router;
