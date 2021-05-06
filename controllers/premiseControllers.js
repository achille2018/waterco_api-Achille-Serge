import Premise from '../model/premise.model.js'

export async function addPremise (req, res) {
  try {
    const premise = await Premise.create(req.body)
    if (premise) {
      res.status(225).json({
        success: true,
        Message: 'Premise created successfully',
        data: premise
      })
    } else {
      res.status(225).json({
        success: true,
        message: 'Premise could be not created now'
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

export async function viewPremise (req, res) {
  try {
    const allpremise = await Premise.findAll({ where: { clientId: req.params.id } })
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

// View all Premise
export async function viewAllPremises (req, res) {
  try {
    const allpremise = await Premise.findAll()
    if (allpremise) {
      res.json({
        success: true,
        message: 'Premise records retrieved successfully',
        data: allpremise
      })
    } else {
      res.json({
        success: true,
        message: 'No premise records found.'
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

// View Member premises
export async function viewMemberPremises (req, res) {
  try {
    const allpremise = await Premise.findAll()
    if (allpremise) {
      res.json({
        success: true,
        message: 'Premise records retrieved successfully',
        data: allpremise
      })
    } else {
      res.json({
        success: true,
        message: 'No premise records found.'
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

// update premise
export async function updatePremise (req, res) {
  Premise.update(req.body, {
    where: { premiseClientId: req.params.id }
  })
    .then(updatedData => {
      if (updatedData[0] !== 0) {
        res.status(200).json({
          success: true,
          message: 'Premise Records were updated successfully.'
        })
      } else {
        res.status(200).json({
          success: false,
          message: 'Premise Records could not be updated'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        success: false,
        message: 'Error processing your sent request...'
      })
    })
}
