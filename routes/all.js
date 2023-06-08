const express = require("express");
const router = express.Router();
const { getAlldatas, getAllDatasById } = require("../controllers/all");

router.get("/", getAlldatas);
router.get("/:id", getAllDatasById);

module.exports = router;
