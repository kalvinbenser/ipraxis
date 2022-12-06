const yup = require("yup");
const createLabSchema = yup.object({
  body: yup.object({
        lab_name: yup.string().required("lab_name is required"),
        address: yup.string().required("address is required"),
        phone_number: yup.number().required("phone number is required"),
        lab_email: yup.string().required("lab_email is required"),
        contact_person: yup.string().required("contact_person is required"),
        registration_number: yup.string().required("registration_number is required"),
        GST_number: yup.string().required("GST number is required"),
        lab_status: yup.number().required("lab_status is required"),
        lab_delete_status: yup.number().required("lab_delete_status is required"),
        createdBy: yup.number().required("createdBy is required"),
        updatedBy:yup.number().required("updatedBy is required")
  })
});

const updateLabSchema = yup.object({
    body: yup.object({
        lab_id: yup.number().required("lab_id is required"),
        lab_name: yup.string().notRequired(),
        address: yup.string().notRequired(),
        phone_number: yup.number().notRequired(),
        lab_email: yup.string().notRequired(),
        contact_person: yup.string().notRequired(),
        registration_number: yup.string().notRequired(),
        GST_number: yup.string().notRequired(),
        lab_status: yup.number().notRequired(),
        lab_delete_status: yup.number().notRequired(),
        createdBy: yup.number().notRequired(),
        updatedBy:yup.number().notRequired()
      })
});

module.exports = { createLabSchema, updateLabSchema };
