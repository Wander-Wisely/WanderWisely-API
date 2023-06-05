const express = require("express");
const router = express.Router();

const wisata = require("./wisata");
const fasilitas = require("./fasilitas");
const aktivitas = require("./aktivitas");
const wisata_aktivitas = require("./wisata_aktivitas");
const wisata_fasilitas = require("./wisata_fasilitas");
const medias = require("./medias");
const wisata_medias = require("./wisata_medias");

router.use("/wisatas", wisata);
router.use("/fasilitas", fasilitas);
router.use("/aktivitas", aktivitas);
router.use("/medias", medias);
router.use("/wisata-aktivitas", wisata_aktivitas);
router.use("/wisata-fasilitas", wisata_fasilitas);
router.use("/wisata-medias", wisata_medias);

module.exports = router;
