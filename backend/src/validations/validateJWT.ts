import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const ValidateJWT = (res: Response, req: Request, next: NextFunction) => {
    const token = req.header('x-token');
    const secretJwt: string = "UsEr";
    if (!token) {
        return res.status(403).json({
            ok: false,
            msg: "Token not provided",
        });
    }

    try {
        const { emailuser, iduser } = jwt.verify(token, secretJwt) as { emailuser: string, iduser: string | number };
        
        req.body.iduser = iduser;
        req.body.emailuser = emailuser;
        
        next();
    } catch (err: unknown) {
        const error = err as Error;
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: "Invalid or expired token",
        });
    }
}