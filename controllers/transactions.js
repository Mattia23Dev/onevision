const Transaction = require("../models/Transaction");
const moment = require("moment");
const User = require("../models/User");

exports.addTransaction = async (req, res) => {
    try {
        const newtransaction = new Transaction(req.body);
        await newtransaction.save();
        res.send("Transaction Added Successfully");
      } catch (error) {
        res.status(500).json(error);
      }
};

exports.editTransaction = async (req, res) => {
        try {
          await Transaction.findOneAndUpdate({_id : req.body.transactionId} , req.body.payload)
          res.send("Transaction Updated Successfully");
        } catch (error) {
          res.status(500).json(error);
        }
};

exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findOneAndDelete({_id : req.body.transactionId})
        res.send("Transaction Deleted Successfully");
      } catch (error) {
        res.status(500).json(error);
      }
};

exports.getAllTransactions = async (req , res) =>{
    const { frequency, selectedRange , type } = req.body;
    try {
      const transactions = await Transaction.find({
        user: req.user.id,
        ...(frequency !== "custom"
          ? {
              date: {
                $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
              },
            }
          : {
              date: {
                $gte: selectedRange[0],
                $lte: selectedRange[1],
              },
            }),
        ...(type!=='all' && {type})
      });
  
      res.send(transactions);
    } catch (error) {
      res.status(500).json(error);
    }
}