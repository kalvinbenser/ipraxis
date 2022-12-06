const yup = require("yup");
const createAdminLoginSchema = yup.object({
  body: yup.object({
    user_mobile_no: yup.number().required("user_mobile_no is required"),
    user_email: yup.string().required("user_email is required"),
    user_password: yup.string().required("user_password is required"),
    user_type: yup.number().required("user_type is required"),
    createdBy: yup.number().required("createdBy is required"),
    updatedBy:yup.number().required("updatedBy is required")
  })
});

const checkAdminLoginSchema = yup.object({
    body: yup.object({
        user_email: yup.string().required("user_email is required"),
        user_password: yup.string().required("user_password is required"),
      })
});

module.exports = { createAdminLoginSchema, checkAdminLoginSchema };
