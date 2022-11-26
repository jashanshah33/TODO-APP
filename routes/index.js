const express = require("express");

const router = express.Router();

const {
  home,
  create_list,
  delete_list,
} = require("../controllers/home_controller");

router.get("/", home);
router.post("/create_list", create_list);
router.post("/delete_list", delete_list);

module.exports = router;
