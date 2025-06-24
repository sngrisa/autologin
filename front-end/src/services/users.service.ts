
const urlBackend: string = "http://localhost:3306";

const getUsers = async () => {
    const getDataEndpoint = await fetch(`${urlBackend}`);
    return getDataEndpoint.json();
}

const getUsersById = async () => {
    const getDataEndpoint = await fetch(`${urlBackend}`);
    return getDataEndpoint.json();
}

const getUsersByUsername = async () => {
    const getDataEndpoint = await fetch(`${urlBackend}`);
    return getDataEndpoint.json();
}

const getUsersByEmailuser = async () => {
    const getDataEndpoint = await fetch(`${urlBackend}`);
    return getDataEndpoint.json();
}

const getUsersByStatus = async () => {
    const getDataEndpoint = await fetch(`${urlBackend}`);
    return getDataEndpoint.json();
}

const postUser = async (): Promise<void> => {
    await fetch(`${urlBackend}`);
}

const putUser = async (data: any, iduser: string | number): Promise<void> => {
    await fetch(`${urlBackend}`);
}

const deleteUser = async (iduser: string | number): Promise<void> => {
    await fetch(`${urlBackend}`);
}

const loginUser = async (data: any, iduser: string | number): Promise<void> => {
    await fetch(`${urlBackend}`);
}

export { getUsers, getUsersByEmailuser, getUsersById, getUsersByStatus, getUsersByUsername, postUser, putUser, deleteUser, loginUser };