module.exports = (sequelize, Sequelize) => {
  const adminLogin = sequelize.define("ip_tbl_m_user_master", {
    user_master_id: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_mobile_no: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "0 ->admin , 1 ->doctor,  3 ->patient",
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "0 ->InActive ,1 ->Active",
    },
    delete_status: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      comment: "0 ->Not_Delete , 1 ->Delete",
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    updatedBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNUll: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });

  return adminLogin;
};
