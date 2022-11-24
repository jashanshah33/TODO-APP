const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create_list", homeController.create_list);
router.get("/delete_list", homeController.delete_list);

module.exports = router;
