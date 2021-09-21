// AXIOS
import axios from "axios";

// api url
import { apiUrl_forUsers } from "./constants";

// cancel token
const CancelToken = axios.CancelToken;

// get admin users
export let cancelUserLoginApi;
export async function userLogin(email, password) {
    if ((email, password)) {
        const users = await axios.post(
            apiUrl_forUsers + "login",
            {
                email,
                password,
            },
            {
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancelUserLoginApi = c;
                }),
            }
        );
        return users;
    } else {
        console.log("Please add required parameters");
    }
}
