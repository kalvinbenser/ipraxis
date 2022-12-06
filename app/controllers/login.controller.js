const bcrypt = require('bcrypt')
const db = require("../models");
const AdminLogin = db.adminLogin;
const logoutController = db.logoutModel;
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
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
      
    AdminLogin.create(admin_login)
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = { id: data.id };
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    });
};

exports.getAdminLogin = async (req, res) => {
    const email = req.body.user_email;
    const password = req.body.user_password;
    const getAdminData = await AdminLogin.findOne({ where: { user_email: email } });
  
    if (getAdminData) {
      const HashPassword = getAdminData.user_password;
      bcrypt.compare(password, HashPassword,  (err, result) => {
        if (result) {
          RESPONSE.Success.Message = "login successfully";
          RESPONSE.Success.data = { id: getAdminData.id };
          res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
        } else {
          RESPONSE.Failure.Message = "The password you have entered is incorrect";
          res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
        }
      });
    } else {
      RESPONSE.Failure.Message = "The email you have entered is incorrect";
      res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }
  };
