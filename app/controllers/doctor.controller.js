const db = require("../models");
const doctorController = db.doctorModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.create = async (req, res) => {
    const doctor_controller = {
        doctor_id: req.body.doctor_id,
        user_master_id: req.body.user_master_id,
        doctor_name: req.body.doctor_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        lab_email: req.body.lab_email,
        contact_person: req.body.contact_person,
        registration_number: req.body.registration_number,
        doctor_GST_number: req.body.doctor_GST_number,
        doctor_status: req.body.doctor_status,
        doctor_delete_status: req.body.doctor_delete_status,
        created_by:req.body.created_by,
        updated_by: req.body.updated_by
    }
    doctorController.createDoctorHandler(doctor_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        
    })
}