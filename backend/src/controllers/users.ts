import { RequestHandler } from "express";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import User from "../models/user.model";
import CreateToken from "../validations/jsonwebtoken";

const createUsers: RequestHandler = async (req: Request, res: Response) => {

    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400).json({ errors: result.array() });
        }
        const { username, emailuser, password } = req.body;

        if (String(username).trim().length <= 2 || String(emailuser).trim().length <= 2 || String(password).trim().length <= 2 || String(password).trim().length <= 2 && String(emailuser).trim().length <= 2 && String(username).trim().length <= 2) {
            res.status(401).json({
                ok: false,
                msg: "Field has less of 3 characters !!"
            });
        }

        const bcryptSalts = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, bcryptSalts);

        await User.create({
            username,
            emailuser,
            password: hashedPassword,
            status: true
        });

        res.status(200).json({
            ok: true,
            msg: "User created in database !!!"
        })
        return;
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error creating user:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to create a new user!!!!",
            error: error.message || err
        });
    }

}

const updateUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { iduser } = req.params;
        const { username, emailuser, password } = req.body;

        const bcryptSalts = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, bcryptSalts);

        await User.update({
            username,
            emailuser,
            password: hashedPassword,
            status: true
        },
            {
                where: { iduser }
            });

        res.status(200).json({
            ok: true,
            msg: "User created in database !!!"
        })
        return;
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating', err);
        res.status(500).json({
            ok: false,
            msg: "Error to create a new user!!!!",
            error: error.message || err
        });
    }
}

const getUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll({ where: { status: true } });
        if (!users) {
            res.status(401).json({
                ok: false,
                msg: "Users not found!!!",
            })
        }
        res.status(201).json({
            ok: true,
            msg: "Operation successfull!!!",
            data: users
        })
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to get data from Database!!!!",
            error: error.message || err
        });
    }
}


const getUsersByEmail: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { emailuser } = req.params;
        const user = await User.findOne({ where: { emailuser, status: true } });
        if (!user) {
            res.status(401).json({
                ok: false,
                msg: "User not found !!!",
                data: user
            })
        }
        res.status(201).json({
            ok: true,
            msg: "User finded",
            data: user
        })

    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to get data from Database!!!!",
            error: error.message || err
        });
    }
}


const deconsteUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { iduser } = req.params;
        await User.update({
            status: false
        },
            {
                where: { iduser }
            })
        if (!iduser) {
            res.status(401).json({
                ok: false,
                msg: "User not found!!!",
            })
        }
        res.status(200).json({
            ok: true,
            msg: "User deconsted in database !!!"
        })
        return;
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating', err);
        res.status(500).json({
            ok: false,
            msg: "Error to create a new user!!!!",
            error: error.message || err
        });
    }
}


const getUsersByStatus: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { status } = req.params;
        const user = await User.findAll({ where: { status } });
        if (!user) {
            res.status(401).json({
                ok: false,
                msg: "User not found!!!",
            })
            res.status(201).json({
                ok: true,
                msg: "User finded",
                data: user
            })
        }

    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to get data from Database!!!!",
            error: error.message || err
        });
    }
}

const getUsersById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { iduser } = req.params;
        const user = await User.findAll({ where: { iduser } });
        if (!user) {
            res.status(401).json({
                ok: false,
                msg: "User not found!!!",
            })
        }
        res.status(201).json({
            ok: true,
            msg: "User finded",
            data: user
        })

    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to get data from Database!!!!",
            error: error.message || err
        });
    }
}

const getUsersByUsername: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ where: { username, status: true } });
        if (!user) {
            res.status(401).json({
                ok: false,
                msg: "User not found!!!",
            })
        }
        res.status(201).json({
            ok: true,
            msg: "User finded",
            user: user
        })
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in operating:', err);
        res.status(500).json({
            ok: false,
            msg: "Error to get data from Database!!!!",
            error: error.message || err
        });
    }
}

const loginUsers = async (req: Request, res: Response) => {
    try {
        const { emailuser, password } = req.body;

        const userValidate: User | null = await User.findOne({ where: { emailuser } });

        if (!userValidate) {
            return res.status(404).json({
                ok: false,
                msg: "User not found with this email!!!!",
            });
        }

        const passwordValidate: boolean = await bcrypt.compare(password, String(userValidate?.password));

        if (!passwordValidate) {
            return res.status(401).json({
                ok: false,
                msg: "Password Incorrect!!!!",
            });
        }

        const token = await CreateToken(String(userValidate?.iduser), String(userValidate?.emailuser));

        return res.status(200).json({
            ok: true,
            msg: "Welcome User to the System",
            _id: userValidate?.iduser,
            email: userValidate?.emailuser,
            username: userValidate?.username,
            token
        });
    } catch (err: unknown) {
        const error = err as Error;
        console.error('Error in login to users', err);
        return res.status(500).json({
            ok: false,
            msg: "Error to login !!!!",
            error: error.message || err
        });
    }
}


export { createUsers, updateUsers, getUsers, getUsersByEmail, getUsersByStatus, getUsersById, getUsersByUsername, deconsteUsers, loginUsers };