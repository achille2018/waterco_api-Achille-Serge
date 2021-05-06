// import { Client } from 'pg'
import Payment from '../model/payment.model.js'
import Premise from '../model/premise.model.js'

export async function addPayment (req, res) {
  try {
    const payment = await Payment.create(req.body)
    if (payment) {
      res.status(225).json({
        success: true,
        Message: 'Payment created successfully',
        data: payment
      })
    } else {
      res.status(225).json({
        success: true,
        message: 'Payment could be not created now'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(
      {
        success: false,
        message: 'sorry! something is not working'
      })
  }
}

// View all Payments
export async function viewAllPayments (req, res) {
  try {
    const allPayment = await Payment.findAll()
    if (allPayment) {
      res.json({
        success: true,
        message: 'Payment records retrieved successfully',
        data: allPayment
      })
    } else {
      res.json({
        success: true,
        message: 'No payment records found.'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Sorry! Something is wrong...'
    })
  }
}

// View Payments by Premise
export async function viewPaymentsByPremise (req, res) {
  try {
    const allpremise = await Premise.findAll({ where: { premiseId: req.params.id } })
    if (allpremise) {
      res.json({
        success: true,
        message: 'Premise records retrieved successfully',
        data: allpremise
      })
    } else {
      res.json({
        success: true,
        message: 'No Premise  found.'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "sorry! Something is doesn't working..."
    })
  }
}
