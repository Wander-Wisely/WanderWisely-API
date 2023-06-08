// const models = require("../models");

// // aconst { Wisata, Aktivitas } = require("../models"); // Adjust the path to your models

// const getWisataWithMedias = async (req, res) => {
//   try {
//     // Fetch the Wisata data along with its associated Aktivitas
//     const wisataData = await models.Wisata.findAll({
//       include: models.Media,
//     });

//     res.json(wisataData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving data" });
//   }
// };

// // const models = require("../models");

// const getWisataWithMediasById = async (req, res) => {
//   const wisataId = req.params.id; // Assuming the ID is passed as a route parameter

//   try {
//     // Fetch the Wisata data along with its associated Aktivitas based on the provided ID
//     const wisataData = await models.Wisata.findOne({
//       where: { id: wisataId },
//       include: models.Media,
//     });

//     if (!wisataData) {
//       return res.status(404).json({ message: "Wisata not found" });
//     }

//     res.json(wisataData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving data" });
//   }
// };

// // module.exports = { getWisataWithAktivitasById };

// module.exports = { getWisataWithMedias, getWisataWithMediasById };
