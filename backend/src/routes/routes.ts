import { Router, Request, Response } from "express";
import { userRoutes } from "./user.routes";

const routes: Router = Router();

routes.use('/users', userRoutes);

routes.get('/ping', (_req: Request, res: Response): void => {
    res.status(200).json({
        ok: true,
        msg: 'pong',
    })
})

export default routes;
