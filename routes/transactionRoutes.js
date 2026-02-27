const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addTransaction,
  getTransactions,
  getSummary,
} = require("../controllers/transactionController");

/*
========================================
  TRANSACTION ROUTES (Protected Routes)
========================================
*/

// Add a new transaction
// POST /api/transactions/add
router.post("/add", authMiddleware, addTransaction);

// Get all transactions of logged-in user
// GET /api/transactions
router.get("/", authMiddleware, getTransactions);

// Get summary (income, expense, balance)
// GET /api/transactions/summary
router.get("/summary", authMiddleware, getSummary);

module.exports = router;