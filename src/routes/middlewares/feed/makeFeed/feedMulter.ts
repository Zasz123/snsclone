import { NextFunction, Request, Response } from 'express';
import * as multer from 'multer';
import CustomError from '../../error/customError';

let _storage = multer.diskStorage({
    destination: (req: Request, file, cb) => {
        cb(null, 'C:/Users/YangKyungMin/Desktop/study/yanggaengts/uploads/');
    },
    //C:/Users/YangKyungMin/Desktop/study/yanggaengts/uploads/
    filename: (req: Request, file, cb) => {
        cb(null, file.originalname + '-' + Date.now());
    },
});

const upload = multer({ 
    storage: _storage,
}).array("userfile", 10)

const FeedMulter = async (req: Request, res: Response, next: NextFunction) => {
    await upload(req, res, err => {
        if(err) {
            next(new CustomError({ name: 'Wrong_Request', message: err.message}));
        } else {
            next();
        }
    })
}

export default FeedMulter;
