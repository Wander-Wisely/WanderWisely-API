// const models = require("../models");

// const getAllWisatas = async (req, res) => {
//   try {
//     const wisata = await models.Wisata.findAll();

//     res.send({
//       success: true,
//       data: wisata,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };

// const getById = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const wisata = await models.Wisata.findByPk(id);

//     res.send({
//       success: true,
//       data: wisata,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// module.exports = { getAllWisatas, getById };
