const db = require("../models");
const labController = db.labModel; 
const  RESPONSE  = require("../constants/response");
const { MESSAGE } = require("../constants/messages");
const { StatusCode } = require("../constants/HttpStatusCode");

exports.create = async (req, res) => {
    const lab_controller = {
        lab_id: req.body.lab_id,
        lab_name: req.body.lab_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        lab_email: req.body.lab_email,
        contact_person: req.body.contact_person,
        registration_number: req.body.registration_number,
        GST_number: req.body.GST_number,
        lab_status: req.body.lab_status,
        lab_delete_status: req.body.lab_delete_status,
        created_by:req.body.created_by,
        updated_by: req.body.updated_by
    };
    labController.createLabHandler(lab_controller)
    .then((data) => {
        RESPONSE.Success.Message = MESSAGE.SUCCESS;
        RESPONSE.Success.data = { id: data.id }
        res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    }).catch((err) => {
        RESPONSE.Failure.Error = err.message;
        res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    });
};

exports.findAll = (req, res) => {
    Category.getAllLabHandler()
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

  exports.findOne = (req, res) => {
    const id = req.params.lab_id;
  
    PetServiceBooking.getLabHandlerById(id)
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