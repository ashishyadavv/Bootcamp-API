const express = require("express");
const router = express.Router();
const {
  createCourse,
  //   getAllCourse,s
  getCourses,
} = require("../controllers/courses");

router.post("/", createCourse);
router.get("/", getCourses);
// router.get("/all", getAllCourse);

module.exports = router;
