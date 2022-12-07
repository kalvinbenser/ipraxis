const db = require("../models");
const diseaseController = db.diseaseModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.createDiseaseHandler = async (req, res) => {
    const disease_controller = {
        disease: req.body.disease,
        status: req.body.status,
        delete_status: req.body.delete_status,
        createdBy:req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
    diseaseController.create(disease_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.disease_id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getAllDiseaseHandler = (req, res) => {
    diseaseController.findAll()
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

  exports.getDiseaseHandlerById = (req, res) => {
    const id = req.body.disease_id;
  
    diseaseController.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find disease handler with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.updateDiseaseHandlerById = async (req, res) => {
    const id = req.body.disease_id;
    //const ValidateMessage = await validator(req.body, validationRule, {});
  
    diseaseController.update(req.body, {
      where: { disease_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = MESSAGE.UPDATE;
        RESPONSE.Success.data = { disease_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update disease handler with id=${id}. Maybe disease handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.deleteDiseaseHandlerById = (req, res) => {
    const id = req.body.disease_id;
  
    diseaseController.destroy({
      where: { disease_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message=MESSAGE.DELETE;
        RESPONSE.Success.data= { disease_id:id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
      } else {
        RESPONSE.Failure.Message=`Cannot delete disease handler with id=${id}. Maybe disease handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};
