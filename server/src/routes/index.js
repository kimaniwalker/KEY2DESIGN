import { Router } from 'express';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import contactRouter from './contactform';
import stripeDonationsRouter from './stripeDonations';
import profileRouter from './profile';

import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import StripeRegisterRouter from './stripeRegisterPost';
import StripeChargesPostRouter from './stripeChargePost';



let router = Router();

/* 
router.use(tokenMiddleware);
router.use(isLoggedIn);
 */

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);
router.use('/users', usersRouter);
router.use('/classes', classesRouter);
router.use('/profile', profileRouter);
router.use('/striperegisterpost', StripeRegisterRouter);
router.use('/stripecharges', StripeChargesPostRouter);


router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn)
    .get(tokenMiddleware, isLoggedIn);

export default router;