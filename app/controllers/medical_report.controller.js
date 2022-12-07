const db = require("../models");
const medicalReportController = db.medicalReportModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.createMedicalReportHandler = async (req, res) => {
    const medical_report_controller = {
        medical_report: req.body.medical_report,
        file_type: req.body.file_type,
        status: req.body.status,
        delete_status: req.body.delete_status,
        createdBy:req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
    medicalReportController.create(medical_report_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.medical_report_id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getAllMedicalReportHandler = (req, res) => {
    medicalReportController.findAll()
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

  exports.getMedicalReportHandlerById = (req, res) => {
    const id = req.body.medical_report_id;
  
    medicalReportController.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find medical report handler with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.updateMedicalReportHandlerById = async (req, res) => {
    const id = req.body.medical_report_id;
    //const ValidateMessage = await validator(req.body, validationRule, {});
  
    medicalReportController.update(req.body, {
      where: { medical_report_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = MESSAGE.UPDATE;
        RESPONSE.Success.data = { medical_report_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update medical report handler with id=${id}. Maybe medical report handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.deleteMedicalReportHandlerById = (req, res) => {
    const id = req.body.medical_report_id;
  
    medicalReportController.destroy({
      where: { medical_report_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message=MESSAGE.DELETE;
        RESPONSE.Success.data= { medical_report_id:id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
      } else {
        RESPONSE.Failure.Message=`Cannot delete medical report handler with id=${id}. Maybe medical report handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
