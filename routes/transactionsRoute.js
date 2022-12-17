const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();
const moment = require("moment");
const { authUser } = require("../middlwares/auth");
const {
  addTransaction,
  deleteTransaction,
  getAllTransactions,
  editTransaction,
} = require("../controllers/transactions")

router.post("/get-all-transactions", authUser, getAllTransactions);
router.post("/add-transaction", authUser, addTransaction);
router.post("/edit-transaction", authUser, editTransaction);
router.post("/delete-transaction", authUser, deleteTransaction);

module.exports = router;
