const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorHandlerResponse");
const asyncHandler = require("../middlewares/async");

exports.createBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await BootCamp.create(req.body);
  res.status(200).json({ success: true, data: bootcamps });
});

exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findById(req.params.id);

  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: bootcamp });
});
exports.getAllBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await BootCamp.find();

  res.status(200).json({ success: true, data: bootcamps });
});

exports.updateBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: bootcamp });
});
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
