import request from 'superagent';

const URL = 'http://localhost:3000';

export const getCloud = async (someId) => {
    const data = await request.get(`${URL}/clouds/${someId}`);

    return data.body;
}

export const getClouds = async () => {
    const data = await request.get(`${URL}/clouds/`);

    return data.body;
}

export const addCloud = async (cloud) => {
    const data = await request.post(`${URL}/clouds/`, cloud);

    return data.body;
}