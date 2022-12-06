module.exports = (sequelize, Sequelize) => {
    const patientModel = sequelize.define("ip_tbl_pm_patient",{
        patient_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_master_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        patient_name: {
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
            type: Sequelize.STRING, //license no
            allowNull: false,
        },
        patient_GST_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        patient_status: {
            type: Sequelize.INTEGER,
            allowNUll:false,
            comment:"0 ->InActive ,1 ->Active"
        },
        patient_delete_status: {
            type: Sequelize.INTEGER,
            allowNull:false,
            comment:"0 ->Not_Delete ,1 ->Delete"
        },
        aadhar_no: {
            type:Sequelize.BIGINT,
            allowNull: false
        },
        family_history: {
            type: Sequelize.INTEGER,
            allowNUll: false,
            comment:"0 ->No ,1 ->Yes"
        },
        medical_reports: {
            type: Sequelize.STRING,  //file upload
            allowNull: false
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
    return patientModel;
}