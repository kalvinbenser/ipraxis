const { validate } = require("../middleware/validate");
const SCHEMA = require("../schema");
const router = require("express").Router();

const AdminLoginController = require("../controllers/login.controller");
const LabController = require("../controllers/lab.controller");
const HospitalController = require("../controllers/hospital.controller");
const MedicalReportController = require("../controllers/medical_report.controller");
const DiseaseController = require("../controllers/disease.controller");




//------------------adminLogin----------------------------
  //---create admin login
  router.post(
    "/createAdminLogin",
    validate(SCHEMA.ADMIN_LOGIN.createAdminLoginSchema),
    AdminLoginController.createAdminLogin
  );

  //---create user log
  router.post("/createLogoutUserLog", 
  validate(SCHEMA.ADMIN_LOGIN.createUserLogSchema),
  AdminLoginController.createLogoutUserLog
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

//--------------------Hospital Handler---------------------------
  //---create Hospital handler
  router.post(
    "/createHospitalHandler", 
    validate(SCHEMA.HOSPITAL_HANDLER.createHospitalSchema), 
    HospitalController.createHospitalHandler
    );
  
  //---get all Hospital handler
    router.get(
      "/getAllHospitalHandler", 
      HospitalController.getAllHospitalHandler
      );
  //---get Hospital Handler By Id
    router.get(
      "/getHospitalHandlerById",  
       HospitalController.getHospitalHandlerById
       );

  //---update Hospital handler by id
  router.put(
    "/updateHospitalHandlerById", 
    validate(SCHEMA.HOSPITAL_HANDLER.updateHospitalSchema), 
    HospitalController.updateHospitalHandlerById
    );

  //---delete Hospital Handler By Id
  router.delete(
    "/deleteHospitalHandlerById",  
     HospitalController.deleteHospitalHandlerById
     );

//--------------------Medical Report Handler---------------------------
  //---create Medical Report handler
  router.post(
    "/createMedicalReportHandler", 
    validate(SCHEMA.MEDICAL_REPORT_SCHEMA.createMedicalReportSchema), 
    MedicalReportController.createMedicalReportHandler
    );
  
  //---get all Medical Report handler
    router.get(
      "/getAllMedicalReportHandler", 
      MedicalReportController.getAllMedicalReportHandler
      );
  //---get Medical Report Handler By Id
    router.get(
      "/getMedicalReportHandlerById",  
      MedicalReportController.getMedicalReportHandlerById
       );

  //---update Medical Report handler by id
  router.put(
    "/updateMedicalReportHandlerById", 
    validate(SCHEMA.MEDICAL_REPORT_SCHEMA.updateMedicalReportSchema), 
    MedicalReportController.updateMedicalReportHandlerById
    );

  //---delete Medical Report Handler By Id
  router.delete(
    "/deleteMedicalReportHandlerById",  
    MedicalReportController.deleteMedicalReportHandlerById
     );

//--------------------Disease Handler---------------------------
  //---create Disease handler
  router.post(
    "/createDiseaseHandler", 
    validate(SCHEMA.DISEASE.createDiseaseSchema), 
    DiseaseController.createDiseaseHandler
    );
  
  //---get all Disease handler
    router.get(
      "/getAllDiseaseHandler", 
      DiseaseController.getAllDiseaseHandler
      );
  //---get Disease Handler By Id
    router.get(
      "/getDiseasetHandlerById",  
      DiseaseController.getDiseaseHandlerById
       );

  //---update Disease handler by id
  router.put(
    "/updateDiseaseHandlerById", 
    validate(SCHEMA.DISEASE.updateDiseaseSchema), 
    DiseaseController.updateDiseaseHandlerById
    );

  //---delete Disease Handler By Id
  router.delete(
    "/deleteDiseaseHandlerById",  
    DiseaseController.deleteDiseaseHandlerById
     );