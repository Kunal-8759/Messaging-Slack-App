import express from 'express';

const userRouter =express.Router();

userRouter.get('/',(req,res)=>{
    return res.status(200).json({message:'Welcome to the user route'});
});

export default userRouter;