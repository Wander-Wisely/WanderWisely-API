const models = require("../models");

const getAllAktivitas = async (req, res) => {
  try {
    const aktivitas = await models.Aktivitas.findAll();

    res.send({
      success: true,
      data: aktivitas,
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
    const aktivitas = await models.Aktivitas.findByPk(id);

    res.send({
      success: true,
      data: aktivitas,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getAllAktivitas, getById };
