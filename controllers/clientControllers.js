// import { Client } from 'pg'
import Client from '../model/client.model.js'

export async function addClient (req, res) {
  try {
    const client = await Client.create(req.body)
    if (client) {
      res.status(225).json({
        success: true,
        Message: 'The new client was successfully added',
        data: client
      })
    } else {
      res.status(225).json({
        success: true,
        message: 'Client Cannot add'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(
      {
        success: false,
        message: 'Oops! something is wrong'
      })
  }
}

export async function viewClient (req, res) {
  try {
    const allClient = await Client.findAll({ where: { clientId: req.params.id } })
    if (allClient) {
      res.json({
        success: true,
        message: 'Client successfully added',
        data: allClient
      })
    } else {
      res.json({
        success: true,
        message: 'Client cannot found'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Oops! Something is wrong..'
    })
  }
}

// View all Client
export async function viewAllMembers (req, res) {
  try {
    const allClient = await Client.findAll()
    if (allClient) {
      res.json({
        success: true,
        message: 'Client records successfully added',
        data: allClient
      })
    } else {
      res.json({
        success: true,
        message: 'Client records cannot find.'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Ooops! Something is not working...'
    })
  }
}

// Update member record
export async function updateMember (req, res) {
  Client.update(req.body, {
    where: { clientId: req.params.id }
  })
    .then(updatedData => {
      if (updatedData[0] !== 0) {
        res.status(200).json({
          success: true,
          message: 'Client Records successfully updated '
        })
      } else {
        res.status(200).json({
          success: false,
          message: 'Client Records cannot update'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        success: false,
        message: 'Oops! Error'
      })
    })
}
// Delete a Member
export async function deleteMember (req, res) {
  Client.destroy({
    where: { clientId: req.params.id }
  })
    .then(num => {
      if (num === 1) {
        res.status(200).json({
          success: true,
          message: 'Client successfully deleted '
        })
      } else {
        res.status(200).json({
          success: false,
          message: 'Client cannot delete'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        success: false,
        message: 'Oops! Error.'
      })
    })
}
