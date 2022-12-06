module.exports = (sequelize, Sequelize) => {
    const labModel = sequelize.define("ip_tbl_pm_lab",{
        lab_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lab_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone_number:{
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
        GST_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lab_status: {
            type: Sequelize.INTEGER,
            allowNUll:false,
            comment:"0 ->InActive ,1 ->Active"
        },
        lab_delete_status: {
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
          }
    })
    return labModel;
}