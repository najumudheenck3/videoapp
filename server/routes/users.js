import express from 'express'
import { deleteUser, dislike, getUser, like, subcribe, unsubcribe, update } from '../controllers/userContorller.js';
import { verifyToken } from '../verifyToken.js';

const router=express.Router()

//updata user
router.put('/:id',verifyToken,update)
//delete user
router.delete('/:id',verifyToken,deleteUser)
//get a user
router.get('/find/:id',getUser)
//subcribe a user
router.put('/sub/:id',verifyToken,subcribe)
//unsubcribe a user
router.put('/unsub/:id',verifyToken,unsubcribe)
//like a video
router.put('/like/:id',verifyToken,like)
//dislike a video
router.put('/dislike/:id',verifyToken,dislike)

export default router;