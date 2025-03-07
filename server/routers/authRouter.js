import { Router } from "express";

import resgister from '../controllers/authController.js'

const router = Router();
router.post('/register',resgister);



export default router;
