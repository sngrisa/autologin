import { check } from "express-validator";
import { createUsers, deconsteUsers, getUsers, getUsersByEmail, getUsersById, getUsersByStatus, getUsersByUsername, loginUsers, updateUsers } from "../controllers/users";
import { Router } from "express";
import  {ValidateFields}  from "../validations/validateFields";

const userRoutes = Router();

userRoutes.get('', ValidateFields, getUsers); //Funcionando

userRoutes.post('', [ //Andubo
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    check('emailuser', 'The Email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
ValidateFields], createUsers);

userRoutes.put('/:iduser', [ //Andubo
    check('iduser', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    check('emailuser', 'The Email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], updateUsers);

userRoutes.put('/delete/:iduser', [
    check('iduser', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    ValidateFields
], deconsteUsers);

userRoutes.get('/emailuser/:emailuser', [ //Funciona
    check('emailuser', 'The email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    ValidateFields
], getUsersByEmail);

userRoutes.get('/:iduser', [ //Funciona
    check('iduser', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    ValidateFields
], getUsersById);

userRoutes.get('/username/:username', [ //Funciona
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], getUsersByUsername);

userRoutes.get('/status/:status', [   //Andubo
    check('status', 'The status is required').not().isEmpty().isLength({ min: 1 }),
    ValidateFields
], getUsersByStatus);

userRoutes.post('/login', [
    check('emailuser', 'The email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields, loginUsers
])

export { userRoutes };