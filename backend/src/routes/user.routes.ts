import { check } from "express-validator";
import { createUsers, deconsteUsers, getUsers, getUsersByEmail, getUsersById, getUsersByStatus, getUsersByUsername, updateUsers } from "../controllers/users";
import { Router } from "express";
import  ValidateFields  from "../validations/validateFields";

const userRoutes = Router();

userRoutes.get('/', ValidateFields, getUsers);

userRoutes.post('/', [
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    check('emailuser', 'The Email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
ValidateFields], createUsers);

userRoutes.put('/:id', [
    check('id', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    check('emailuser', 'The Email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
    check('status', 'The status is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], updateUsers);

userRoutes.put('/delete/:id', [
    check('id', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    check('emailuser', 'The Email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
    check('status', 'The status is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], deconsteUsers);

userRoutes.get('/email/:emailuser', [
    check('emailuser', 'The email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    ValidateFields
], getUsersByEmail);

userRoutes.get('/:id', [
    check('id', 'The id is must required').not().isEmpty().isLength({ min: 1 }),
    ValidateFields
], getUsersById);

userRoutes.get('/username/:username', [
    check('username', 'The username is must required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], getUsersByUsername);

userRoutes.get('/status/:status', [
    check('status', 'The status is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
], getUsersByStatus);

userRoutes.post('/login', [
    check('emailuser', 'The email is required').not().isEmpty().isEmail().isLength({ min: 3 }),
    check('password', 'The password is required').not().isEmpty().isLength({ min: 3 }),
    ValidateFields
])

export { userRoutes };