const express = require("express");

const router = express.Router();

const { adminLogin,adminRegister } = require("../controllers/admin.js");

// admin register
router.post("/admin-register", adminRegister);
// admin login
router.post("/admin-login", adminLogin);
module.exports = router;