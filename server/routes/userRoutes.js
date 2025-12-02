import express from 'express'
import {userAuth} from '../middleware/userAuth.js';
import { getUserdata } from '../controllers/userController.js';

const userRoutes= express.Router();

userRoutes.get('/data',userAuth,getUserdata);

export default userRoutes;