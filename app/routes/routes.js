const { validate } = require("../middleware/validate");
const SCHEMA = require("../schema");
const router = require("express").Router();
const AdminLoginController = require("../controllers/login.controller");




//------------------adminLogin----------------------------
  //---create admin login
  router.post(
    "/createAdminLogin",
    validate(SCHEMA.ADMIN_LOGIN.createAdminLoginSchema),
    AdminLoginController.createAdminLogin
  );
  
  //---check Admin Login
  router.post(
    "/checkAdminLogin",
    validate(SCHEMA.ADMIN_LOGIN.checkAdminLoginSchema),
    AdminLoginController.getAdminLogin
  );

  module.exports = router;