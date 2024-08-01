// import { Request, Response, NextFunction } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const API_KEY = process.env.API_KEY;

// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers['authorization'];
//     const apiKey = authHeader && authHeader.split(' ')[1];

//     if (apiKey == null) return res.sendStatus(401);
//     if (apiKey !== API_KEY) return res.sendStatus(403);

//     next();
// };

// export default verifyToken;
