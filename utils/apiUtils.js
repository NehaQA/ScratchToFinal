import { request } from "node:http";

export const loginAPI = async (request, username, password) => {
    const response = await request.post('${process.env.API_BASE_URL}/auth/login', {
        json:
        {
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        }
    });
        return await response.json();
    }
