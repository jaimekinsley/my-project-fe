import request from 'superagent';

const URL = 'https://serene-plains-21154.herokuapp.com';

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