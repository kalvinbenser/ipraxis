const yup = require("yup");
const createHospitalSchema = yup.object({
  body: yup.object({
        hospital_name: yup.string().required("hospital_name is required"),
        address: yup.string().required("address is required"),
        phone_number: yup.number().required("phone number is required"),
        lab_email: yup.string().required("lab_email is required"),
        contact_person: yup.string().required("contact_person is required"),
        registration_number: yup.string().required("registration_number is required"),
        hospital_GST_number: yup.string().required("hospital_GST_number is required"),
        hospital_status: yup.number().required("hospital_status is required"),
        hospital_delete_status: yup.number().required("hospital_delete_status is required"),
        createdBy: yup.number().required("createdBy is required"),
        updatedBy:yup.number().required("updatedBy is required")
  })
});

const updateHospitalSchema = yup.object({
    body: yup.object({
        hospital_id: yup.number().required("hospital_id is required"),
        hospital_name: yup.string().notRequired(),
        address: yup.string().notRequired(),
        phone_number: yup.number().notRequired(),
        lab_email: yup.string().notRequired(),
        contact_person: yup.string().notRequired(),
        registration_number: yup.string().notRequired(),
        hospital_GST_number: yup.string().notRequired(),
        hospital_status: yup.number().notRequired(),
        hospital_delete_status: yup.number().notRequired(),
        createdBy: yup.number().notRequired(),
        updatedBy:yup.number().notRequired()
      })
});

module.exports = { createHospitalSchema, updateHospitalSchema };
