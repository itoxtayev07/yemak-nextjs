import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://api.yemak.uz',
    timeout: 10000,
})