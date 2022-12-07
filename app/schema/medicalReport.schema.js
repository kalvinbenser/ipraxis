const yup = require("yup");
const createMedicalReportSchema = yup.object({
  body: yup.object({
        medical_report: yup.string().required("medical_report is required"),
        file_type: yup.number().required("file_type is required"),
        status: yup.number().required("status is required"),
        delete_status: yup.number().required("delete_status is required"),
        createdBy: yup.number().required("createdBy is required"),
        updatedBy:yup.number().required("updatedBy is required")
  })
});
const updateMedicalReportSchema = yup.object({
    body: yup.object({
        medical_report_id: yup.string().required("medical_report_id is required"),
        medical_report: yup.string().notRequired(),
        file_type: yup.number().notRequired(),
        status: yup.number().notRequired(),
        delete_status: yup.number().notRequired(),
        createdBy: yup.number().notRequired(),
        updatedBy:yup.number().notRequired()
    })
  });

  module.exports = { createMedicalReportSchema, updateMedicalReportSchema };
