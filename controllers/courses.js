const Course = require("../models/Course");
const ErrorResponse = require("../utils/errorHandlerResponse");
const asyncHandler = require("../middlewares/async");
const bootcamp = require("../models/Bootcamp");

exports.createCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(200).json({ success: true, data: course });
});

exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find().populate("bootcamp");
  }
  const courses = await query;
  res.status(200).json({ success: true, count: courses.length, data: courses });
});
