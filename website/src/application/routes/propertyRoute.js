const router = require('express').Router();
const propertyController = require('../controllers/propertyController');
const { protect, restrictTo } = require('../controllers/authController');

router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getProperty);

// Protect all routes after this middleware
router.use(protect);

router.post('/', propertyController.createProperty);
router.patch('/:id/uploadPhoto',
    propertyController.uploadPropertyPhoto,
    propertyController.resizePropertyPhoto,
    propertyController.updateProperty
);
router.patch('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;