import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";


//register api - called by component 
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
 }
 
 //login  api - called by component 
 export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
 }