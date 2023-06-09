const app = require('express');
const router = app.Router();

// Auth middleware
const CheckAuth = require('../middleware/AuthMiddleware')

// Technology controller
const technologyController = require('../controllers/Technology_Controller');

// Create
router.post("/",CheckAuth, async (req, res) =>technologyController.create(req, res));

// Update
router.put("/:id",CheckAuth, async (req, res) => technologyController.update(req, res));

// Delete
router.delete("/:id",CheckAuth, async (req, res) =>technologyController.delete(req, res));

// Get by id
router.get("/:id",CheckAuth, async (req, res) => technologyController.getById(req, res));

// Get all
router.get("/",CheckAuth, async (req, res) => technologyController.getAll(req, res));

module.exports = router;