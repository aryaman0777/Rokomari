import express from "express";
import {createJob, deleteJob, updateJob, viewJob} from "../controllers/jobController.js"
import {userAuth} from "../middleware/userAuth.js"

const router = express.Router();

router.post('/userAuth',userAuth);
router.post('/createJob',userAuth,createJob);
router.put('/updateJob',updateJob);
router.delete('/deleteJob',deleteJob);
router.get('/viewJob',userAuth,viewJob);

export default router;