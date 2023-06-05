const express = require("express");
const router = express.Router();

const { getAllAktivitas, getById } = require("../controllers/aktivitas");

router.get("/", getAllAktivitas);
router.get("/:id", getById);

module.exports = router;
