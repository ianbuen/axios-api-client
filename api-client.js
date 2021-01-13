import axios from "axios";

// configure axios
const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_SERVER, 
});

// define functions for each kind of request
export default {
    userLogin(payload) {
        return instance.post("/login", payload);
    },

    isUserActive() {
        return instance.get("/");
    }
};


// reference:
// https://www.codementor.io/@capocaccia/keeping-axios-where-it-belongs-o6xidrkrk
