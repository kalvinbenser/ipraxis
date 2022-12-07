module.exports = (sequelize, Sequelize) => {
    const medicalReportModel = sequelize.define("ip_tbl_m_medical_report", {
        medical_report_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        medical_report: {
            type: Sequelize.STRING,
            allowNUll: false
        },
        file_type: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.INTEGER,
            allowNUll: false,
            comment: "2 -> Inactive, 1 -> Active"
        },
        delete_status:{
            type:Sequelize.INTEGER,
            allowNull: false,
            comment:"0 ->Not_Delete , 1 ->Delete"
        },
        createdBy: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        updatedBy: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    })
   return medicalReportModel;
};