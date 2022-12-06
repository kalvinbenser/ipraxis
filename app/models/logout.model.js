module.exports = (sequelize, Sequelize) => {
  const logoutModel = sequelize.define("ip_tbl_m_user_log", {
    user_log_id: {
        type: Sequelize.INTEGER,
        allowNUll:false,
        primaryKey: true,
        autoIncrement: true
    },
    user_master_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    log_type:{
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "1 ->Login ,2 ->Logout ,3 ->Failed_Login ,4 -> Forget"
    },
    createdOn:{
        type: Sequelize.DATE,
        allowNUll: false
    }
});
  return logoutModel;
}