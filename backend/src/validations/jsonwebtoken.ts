import jwt from 'jsonwebtoken';

const CreateToken = (iduser: number | string, emailuser: string): Promise<string> => {
    const secretJWT: string = "UsEr";

    const payload = {
        iduser,
        emailuser
    }

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secretJWT,
            { expiresIn: "12h" },
            (err, token) => {
                return (err) ? reject(err) : resolve(token as string);
            }
        )
    })
}

export default CreateToken;