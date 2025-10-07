const BootCamp = require("../models/Bootcamp");

exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamps = await BootCamp.create(req.body);

    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    console.error(error);
  }
};

exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error);
  }
};
exports.getAllBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await BootCamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error(error);
  }
};

exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error);
  }
};
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
  }
};
