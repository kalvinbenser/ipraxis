module.exports = (sequelize, Sequelize) => {
    const doctorModel = sequelize.define("ip_tbl_pm_doctor",{
        doctor_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_master_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        doctor_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        lab_email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contact_person: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        registration_number: {
            type: Sequelize.STRING,  //license number
            allowNull: false,
        },
        doctor_GST_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        doctor_status: {
            type: Sequelize.INTEGER,
            allowNUll:false,
            comment:"0 ->InActive ,1 ->Active"
        },
        doctor_delete_status: {
            type: Sequelize.INTEGER,
            allowNull:false,
            comment:"0 ->Not_Delete ,1 ->Delete"
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
    })
    return doctorModel;
}