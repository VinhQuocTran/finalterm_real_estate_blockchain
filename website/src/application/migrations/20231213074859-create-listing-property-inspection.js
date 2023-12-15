'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("ListingPropertyInspections", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },
      isPass: {
        field: 'is_pass',
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      createdDate: {
        field: 'created_date',
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      finishedDate: {
        field: 'finished_date',
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      propertyInspectionServiceId: {
        field: 'property_inspection_service_id',
        type: Sequelize.DataTypes.UUID,
        allowNull: false
      },
      submitListingPropertyId: {
        field: 'submit_listing_property_id',
        type: Sequelize.DataTypes.UUID,
        allowNull: false
      },
      createdAt: {
        field:  'created_at',
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE
      }      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ListingPropertyInspections');
  }
};
