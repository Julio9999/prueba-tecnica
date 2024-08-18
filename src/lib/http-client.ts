import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../constants';


export const httpClient: AxiosInstance = axios.create({
    baseURL: baseURL, 
});