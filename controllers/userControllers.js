import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../model/user.model.js'

dotenv.config()

const failed = 'sorry'

// Add a User
export async function addUser (req, res) {
  try {
    const oldUser = await User.findOne({ where: { emailAddress: req.body.emailAddress } })
    console.log(oldUser)
    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exist'
      })
    }
    bcrypt.hash(req.body.userPassword, 10).then(async (hash) => {
      const userObj = {
        emailAddress: req.body.emailAddress,
        userPassword: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userCity: req.body.userCity,
        userCountry: req.body.userCountry

      }
      const user = await User.create(userObj)
      if (user) {
        res.status(200).json({
          success: true,
          message: 'User creation successfully',
          data: user
        })
      } else {
        res.status(200).json({
          success: true,
          message: 'User could not be created at this time'
        })
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Sorry! Something is wrong...'
    })
  }
}

// View a user
export async function viewUser (req, res) {
  try {
    const user = await User.findAll({ where: { userId: req.params.id } })
    if (user) {
      res.json({
        success: true,
        message: 'User records retrieved successfully',
        data: user
      })
    } else {
      res.json({
        success: true,
        message: 'No User records found.'
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

// View all users
export async function viewAllUsers (req, res) {
  try {
    const allUsers = await User.findAll()
    if (allUsers) {
      res.json({
        success: true,
        message: 'User records retrieved successfully',
        data: allUsers
      })
    } else {
      res.json({
        success: true,
        message: 'No User records found.'
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

// Sign In
export async function signIn (req, res) {
  // Get a user with the email address
  // Ensure that their password is correct
  // Create a JWT for them. (For Authenticating Other API Requests)
  try {
    const user = await User.findOne({ where: { emailAddress: req.body.emailAddress } })
    if (!user) {
      return res.status(401).json({
        status: failed,
        message: 'Authentication Failed: User with email address not found.'
      })
    }
    bcrypt.compare(req.body.userPassword, user.userPassword).then(response => {
      if (!response) {
        return res.status(401).json({
          status: failed,
          message: 'Authentication Failed: Incorrect password.'
        })
      }
      const authToken = jwt.sign({ emailAddress: user.emailAddress, userId: user.userId },
        process.env.AUTH_KEY, { expiresIn: '1h' })
      return res.status(200).json({
        status: true,
        message: 'User authentication successful',
        user: { fullName: user.fullName, emailAddress: user.emailAddress, userId: user.userId },
        token: authToken,
        expiresIn: 3600
      })
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Oopss! Something is wrong...'
    })
  }
}
