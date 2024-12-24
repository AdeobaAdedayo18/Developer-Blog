import axios from "axios";
import { UserProfileToken } from "../interfaces/User";
import axiosInstance from "../utils/axiosInstance";

const baseURL = "http://127.0.0.1:8000/"

interface loginData{
    email: string;
    password: string;
}

interface registerData{
    username: string;
    password: string;
    email: string;
}

export const loginAPI = async(logindata:loginData)=>{
    try{
        const data = axiosInstance.post<UserProfileToken>(baseURL + "auth/user/login", logindata );
        return data;
    }catch(error) {
        console.log(error);
        // throw error;
        
    }
}
export const registerAPI = async(logindata:registerData)=>{
    try{
        const data = axiosInstance.post<UserProfileToken>("/auth/register", logindata);
        return data;
    }catch(error) {
        console.log(error);
        // throw error;
        
    }
}