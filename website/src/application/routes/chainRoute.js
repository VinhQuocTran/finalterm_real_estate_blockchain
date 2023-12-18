const router = require('express').Router();
const chainController = require('../controllers/chainController');
const {protect} = require("../controllers/authController");

router.get('/', chainController.getChain);
router.get('/users', chainController.getAllUsers);
router.post('/users', chainController.createUser);
router.get('/users/:id', chainController.getUserById);

router.use(protect);

router.put('/users/deposit',chainController.getDepositByUserId)
router.put('/users/withdraw',chainController.getWithDrawByUserId)
router.post('/tokens',chainController.getTokenizeProperty)
router.get('/offers', chainController.getAllOffers);
router.post('/offers', chainController.createOffer);
module.exports = router;