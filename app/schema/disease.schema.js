const yup = require("yup");
const createDiseaseSchema = yup.object({
  body: yup.object({
        disease: yup.string().required("disease is required"),
        status: yup.number().required("status is required"),
        delete_status: yup.number().required("delete_status is required"),
        createdBy: yup.number().required("createdBy is required"),
        updatedBy:yup.number().required("updatedBy is required")
  })
});
const updateDiseaseSchema = yup.object({
    body: yup.object({
        disease_id: yup.string().required("disease_id is required"),
        disease: yup.string().notRequired(),
        status: yup.number().notRequired(),
        delete_status: yup.number().notRequired(),
        createdBy: yup.number().notRequired(),
        updatedBy:yup.number().notRequired()
    })
  });

  module.exports = { createDiseaseSchema, updateDiseaseSchema };
