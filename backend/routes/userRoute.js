import express from 'express'
import { loginUUser, registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUUser)

export default userRouter;