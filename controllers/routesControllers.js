// import { Client } from 'pg'
import Routes from '../model/route.model.js'
import Premise from '../model/premise.model.js'

export async function addRoute (req, res) {
  try {
    const route = await Routes.create(req.body)
    if (route) {
      res.status(225).json({
        success: true,
        Message: 'Routes created successfully',
        data: route
      })
    } else {
      res.status(225).json({
        success: true,
        message: 'Routes could be not created now'
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

// View all Routes
export async function viewRoutes (req, res) {
  try {
    const route = await Routes.findAll()
    if (route) {
      res.json({
        success: true,
        message: 'Routes records retrieved successfully',
        data: route
      })
    } else {
      res.json({
        success: true,
        message: 'No routes records found.'
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

// update Route
export function updateRoute (req, res) {
  console.log(req.body)
  res.send(req.body)
}

// View Premise on ROUTE
export async function viewPremise (req, res) {
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
