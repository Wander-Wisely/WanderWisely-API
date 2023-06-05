const models = require("../models");

const getAllFasilitas = async (req, res) => {
  try {
    const fasilitas = await models.Fasilitas.findAll();

    res.send({
      success: true,
      data: fasilitas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;

  try {
    const fasilitas = await models.Fasilitas.findByPk(id);

    res.send({
      success: true,
      data: fasilitas,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getAllFasilitas, getById };
