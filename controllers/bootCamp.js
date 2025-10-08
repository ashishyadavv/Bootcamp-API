const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorHandlerResponse");
const asyncHandler = require("../middlewares/async");
const qs = require("qs");
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
  console.log("Raw Query String", req._parsedUrl.query); // just to check

  // Parse nested query params correctly
  const queryObj = qs.parse(req._parsedUrl.query);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  const bootcamps = await BootCamp.find(JSON.parse(queryStr));

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});
// exports.getAllBootCamps = asyncHandler(async (req, res, next) => {
//   console.log("Query String", req.query);

//   let query;
//   let queryStr = JSON.stringify(req.query);
//   queryStr = queryStr.replace(
//     /\b(gt|gte|lt|lte|in)\b/g,
//     (match) => `$${match}`
//   );
//   query = BootCamp.find(JSON.parse(queryStr));

//   const bootcamps = await query;

//   res.status(200).json({ success: true, data: bootcamps });
// });

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
