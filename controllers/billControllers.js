import Bill from '../model/bill.model.js'

export async function addBill (req, res) {
  try {
    const bill = await Bill.create(req.body)
    if (bill) {
      res.status(225).json({
        success: true,
        Message: 'Bill captured successfully',
        data: bill
      })
    } else {
      res.status(225).json({
        success: true,
        message: 'bill could be not captured now'
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

export async function viewBill (req, res) {
  try {
    const allBill = await Bill.findAll()
    if (allBill) {
      res.json({
        success: true,
        message: 'Bill records retrieved successfully',
        data: allBill
      })
    } else {
      res.json({
        success: true,
        message: 'No Bill  found.'
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
