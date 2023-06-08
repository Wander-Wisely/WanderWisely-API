// const models = require("../models");

// const getAllMedias = async (req, res) => {
//   try {
//     const medias = await models.Media.findAll();

//     res.send({
//       success: true,
//       data: medias,
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
//     const medias = await models.Media.findByPk(id);

//     res.send({
//       success: true,
//       data: medias,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// module.exports = { getAllMedias, getById };
