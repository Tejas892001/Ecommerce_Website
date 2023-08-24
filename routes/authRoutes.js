import express from 'express'
import {registerController,loginController,testController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from '../middlewares/authMiddlewares.js';
// Router object
const router = express.Router();

// routing
// Register
router.post('/register',registerController)

// Login || POST
router.post('/login',loginController);  

// test routes
router.get('/test',requireSignIn,isAdmin,testController);
export default router

