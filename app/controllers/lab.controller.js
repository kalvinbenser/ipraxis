const db = require("../models");
const labController = db.labModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.createLabHandler = async (req, res) => {
    const lab_controller = {
        lab_name: req.body.lab_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        lab_email: req.body.lab_email,
        contact_person: req.body.contact_person,
        registration_number: req.body.registration_number,
        GST_number: req.body.GST_number,
        lab_status: req.body.lab_status,
        lab_delete_status: req.body.lab_delete_status,
        createdBy:req.body.createdBy,
        updatedBy: req.body.updatedBy
    };
    labController.create(lab_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.getAllLabHandler = (req, res) => {
    labController.findAll()
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

  exports.getLabHandlerById = (req, res) => {
    const id = req.body.lab_id;
  
    labController.findByPk(id)
    .then((data) => {
      if (data) {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = data;
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot find lab handler with id=${id}.`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.updateLabHandlerById = async (req, res) => {
    const id = req.body.lab_id;
    //const ValidateMessage = await validator(req.body, validationRule, {});
  
    labController.update(req.body, {
      where: { lab_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message = MESSAGE.UPDATE;
        RESPONSE.Success.data = { lab_id: id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
      } else {
        RESPONSE.Failure.Message = `Cannot update lab handler with id=${id}. Maybe lab handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
  };

  exports.deleteLabHandlerById = (req, res) => {
    const id = req.body.lab_id;
  
    labController.destroy({
      where: { lab_id: id },
    })
    .then((num) => {
      if (num == 1) {
        RESPONSE.Success.Message=MESSAGE.DELETE;
        RESPONSE.Success.data= { lab_id:id };
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success)
      } else {
        RESPONSE.Failure.Message=`Cannot delete lab handler with id=${id}. Maybe lab handler was not found or req.body is empty!`;
        res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure)
      }
    })
    .catch((err) => {
      RESPONSE.Failure.Message = err.message;
      res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};