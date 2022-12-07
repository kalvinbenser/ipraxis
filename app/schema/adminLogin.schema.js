const yup = require("yup");
const createAdminLoginSchema = yup.object({
  body: yup.object({
    user_mobile_no: yup.number().required("user_mobile_no is required"),
    user_email: yup.string().required("user_email is required"),
    user_password: yup.string().required("user_password is required"),
    user_type: yup.number().required("user_type is required"),
    status: yup.number().required("status is required"),
    delete_status: yup.number().required("delete_status is required"),
    createdBy: yup.number().required("createdBy is required"),
    updatedBy:yup.number().required("updatedBy is required")
  })
});

const createUserLogSchema = yup.object({
  body: yup.object({
    user_master_id: yup.number().required("user_master_id is required"),
    log_type: yup.number().required("log_type is required")
  })
});

const checkAdminLoginSchema = yup.object({
    body: yup.object({
        user_email: yup.string().required("user_email is required"),
        user_password: yup.string().required("user_password is required"),
      })
});

module.exports = { createAdminLoginSchema, checkAdminLoginSchema, createUserLogSchema };
