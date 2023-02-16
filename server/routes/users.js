import express from 'express'
import { deleteUser, dislike, getUser, like, subcribe, unsubcribe, update } from '../controllers/userContorller.js';

const router=express.Router()

//updata user
router.put('/:id',update)
//delete user
router.delete('/:id',deleteUser)
//get a user
router.get('/find/:id',getUser)
//subcribe a user
router.put('/sub/:id',subcribe)
//unsubcribe a user
router.put('/unsub/:id',unsubcribe)
//like a video
router.put('/like/:id',like)
//dislike a video
router.put('/dislike/:id',dislike)

export default router;