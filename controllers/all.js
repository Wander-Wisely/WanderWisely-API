const models = require("../models");

const getAlldatas = async (req, res) => {
  const pageSize = 10;
  const currentPage = req.query.page || 1;

  try {
    const offset = (currentPage - 1) * pageSize;
    const limit = pageSize;

    // Fetch the Wisata data along with its associated Aktivitas with pagination
    const { rows, count } = await models.TourismAttraction.findAndCountAll({
      offset,
      limit,
      include: [
        {
          model: models.TourismType,
        },
        {
          model: models.TourismActivity,
        },
        {
          model: models.TourismFacility,
        },
        {
          model: models.TourismFile,
        },
      ],
    });

    const totalPages = Math.ceil(count / pageSize);

    res.json({
      currentPage,
      totalPages,
      items: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
};

const getAllDatasById = async (req, res) => {
  const wisataId = req.params.id; // Assuming the ID is passed as a route parameter

  try {
    // Fetch the Wisata data along with its associated Aktivitas based on the provided ID
    const wisataData = await models.TourismAttraction.findOne({
      where: { id: wisataId },
      include: [
        {
          model: models.TourismType,
        },
        {
          model: models.TourismActivity,
        },
        {
          model: models.TourismFacility,
        },
        {
          model: models.TourismFile,
        },
      ],
    });

    if (!wisataData) {
      return res.status(404).json({ message: "Wisata not found" });
    }

    res.json(wisataData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
};

module.exports = { getAlldatas, getAllDatasById };


// const models = require("../models");

// const getAlldatas = async (req, res) => {
//   try {
//     // Fetch the Wisata data along with its associated Aktivitas
//     const wisataData = await models.TourismAttraction.findAll({
//       include: [
//         {
//           model: models.TourismType,
//           // as: "tourismType", // Specify the alias for the association
//         },
//         {
//           model: models.TourismActivity,
//         },
//         {
//           model: models.TourismFacility,
//         },
//         {
//           model: models.TourismFile,
//         },
//       ],
//     });

//     res.json(wisataData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error retrieving data" });
//   }
// };

// const getAllDatasById = async (req, res) => {
//   const wisataId = req.params.id; // Assuming the ID is passed as a route parameter

//   try {
//     // Fetch the Wisata data along with its associated Aktivitas based on the provided ID
//     const wisataData = await models.TourismAttraction.findOne({
//       where: { id: wisataId },
//       include: [
//         {
//           model: models.TourismType,
//           // as: "tourismType", // Specify the alias for the association
//         },
//         {
//           model: models.TourismActivity,
//         },
//         {
//           model: models.TourismFacility,
//         },
//         {
//           model: models.TourismFile,
//         },
//       ],
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

// module.exports = { getAlldatas, getAllDatasById };
