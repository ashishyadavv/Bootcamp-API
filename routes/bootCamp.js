const express = require("express");
const router = express.Router();
const {
  createBootCamp,
  getBootCamp,
  getAllBootCamps,
  deleteBootCamp,
  updateBootCamp,
} = require("../controllers/bootCamp");

router.get("/", createBootCamp);
router.get("/all", getAllBootCamps);
router.get("/:id", getBootCamp);
router.put("/:id", updateBootCamp);
router.delete("/:id", deleteBootCamp);

module.exports = router;
