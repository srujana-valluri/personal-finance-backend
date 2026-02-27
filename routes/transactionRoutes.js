const express = require("express");
const router = express.Router();

const {
  addTransaction,
  getTransactions,
  getSummary,
} = require("../controllers/transactionController");

router.post("/add", addTransaction);
router.get("/:user_id", getTransactions);
router.get("/summary/:user_id", getSummary);

module.exports = router;