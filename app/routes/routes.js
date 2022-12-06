const { validate } = require("../middleware/validate");
const SCHEMA = require("../schema");
const router = require("express").Router();
const AdminLoginController = require("../controllers/login.controller");
const LabController = require("../controllers/lab.controller");




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
    AdminLoginController.checkAdminLogin
  );

  module.exports = router;

//--------------------lab Handler---------------------------
  //---create lab handler
  router.post(
    "/createLabHandler", 
    validate(SCHEMA.LAB_HANDLER.createLabSchema), 
    LabController.createLabHandler
    );
  
  //---get all lab handler
    router.get(
      "/getAllLabHandler", 
      LabController.getAllLabHandler
      );
  //---get lab Handler By Id
    router.get(
      "/getLabHandlerById",  
       LabController.getLabHandlerById
       );

  //---update lab handler by id
  router.put(
    "/updateLabHandlerById", 
    validate(SCHEMA.LAB_HANDLER.updateLabSchema), 
    LabController.updateLabHandlerById
    );

  //---delete lab Handler By Id
  router.delete(
    "/deleteLabHandlerById",  
     LabController.deleteLabHandlerById
     );