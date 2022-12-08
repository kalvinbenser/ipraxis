const bcrypt = require('bcrypt')
const db = require("../models");
const AdminLogin = db.adminLogin
const logoutController =db.logoutModel;
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.createAdminLogin = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const admin_login = {
        user_mobile_no: req.body.user_mobile_no,
        user_email: req.body.user_email,
        user_password: await bcrypt.hash(req.body.user_password, salt),
        user_type: req.body.user_type,
        status: req.body.status,
        delete_status: req.body.delete_status,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
      
    AdminLogin.create(admin_login)
    .then(async(data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = { id: data.user_master_id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch(async(err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    });
};


exports.createLogoutUserLog=(req,res)=>{
  const user_log = {
    user_master_id: req.body.user_master_id,
    log_type: 2
  };
  logoutController.create(user_log)
  .then( async (data) => {
    RESPONSE.Success.Message = MESSAGE.SUCCESS;
    RESPONSE.Success.data = { id: data.user_log_id };
    res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
  })
  .catch((err) => {
    RESPONSE.Failure.Message = err.message;
    res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
  });
}
exports.checkAdminLogin = async (req, res) => {
    const email = req.body.user_email;
    const password = req.body.user_password;
    const getAdminData = await AdminLogin.findOne({ where: { user_email: email } });
  
    if (getAdminData) {
      const HashPassword = getAdminData.user_password;
      bcrypt.compare(password, HashPassword,  async(err, result) => {
        if (result) {
          const user_master_id=getAdminData.user_master_id
          const type=1
          const createLog= await createUserLog(user_master_id,type)
          console.log("createLog",createLog)
          RESPONSE.Success.Message = "login successfully";
          RESPONSE.Success.data = { id: getAdminData.user_master_id };
          res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
        } else {
          const user_master_id=getAdminData.user_master_id;
          const type=4;
          const createLog= await createUserLog(user_master_id,type)
          console.log("createLog",createLog)
          RESPONSE.Failure.Message = MESSAGE.INCORRECT_PASSWORD;
          res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
        }
      });
    } else {
      const type=3;
      const user_master_id = 0;
      const createLog= await createUserLog(user_master_id, type)
      console.log("createLog",createLog)
      RESPONSE.Failure.Message = MESSAGE.INCORRECT_EMAIL;
      res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }
  };

 const createUserLog = async (user_master_id, type) => {

    return new Promise((resolve)=>{
      const user_log = {
        user_master_id: user_master_id,
        log_type: type
      };
      logoutController.create(user_log)
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      });
    })
   
  };
