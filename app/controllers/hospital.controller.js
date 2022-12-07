const db = require("../models");
const hospitalController = db.hospitalModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.createHospitalHandler = async (req, res) => {
    const hospital_controller = {
        hospital_name: req.body.hospital_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        lab_email: req.body.lab_email,
        contact_person: req.body.contact_person,
        registration_number: req.body.registration_number,
        hospital_GST_number: req.body.hospital_GST_number,
        hospital_status: req.body.hospital_status,
        hospital_delete_status: req.body.hospital_delete_status,
        createdBy:req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
    hospitalController.create(hospital_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.hospital_id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getAllHospitalHandler = (req, res) => {
    hospitalController.findAll()
    .then((data) => {
      RESPONSE.Success.Message = MESSAGE.SUCCESS;
      RESPONSE.Success.data = data;
      res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.getHospitalHandlerById = (req, res) => {
    const id = req.body.hospital_id;
  
    hospitalController.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find hospital handler with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.updateHospitalHandlerById = async (req, res) => {
    const id = req.body.hospital_id;
    //const ValidateMessage = await validator(req.body, validationRule, {});
  
    hospitalController.update(req.body, {
      where: { hospital_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = MESSAGE.UPDATE;
        RESPONSE.Success.data = { hospital_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update hospital handler with id=${id}. Maybe hospital handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.deleteHospitalHandlerById = (req, res) => {
    const id = req.body.hospital_id;
  
    hospitalController.destroy({
      where: { hospital_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message=MESSAGE.DELETE;
        RESPONSE.Success.data= { hospital_id:id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
      } else {
        RESPONSE.Failure.Message=`Cannot delete hospital handler with id=${id}. Maybe hospital handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};