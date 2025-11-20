import express from "express";
import {createJob, deleteJob, viewJob} from "../controllers/jobController.js"
import {userAuth} from "../middleware/userAuth.js"

const router = express.Router();
router.post('/userAuth',userAuth);
router.post('/createJob',userAuth,createJob);
router.delete('/deleteJob',userAuth,deleteJob);
router.get('/viewJob',userAuth,viewJob);

export default router;