import axios from 'axios';

class AuthService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
        this.loggedUser = null;
    }

    signup = (username, pwd) => this.instance.post("/signup", { username, pwd })
    login = (username, pwd) => this.instance.post("/login", { username, pwd })
    logout = () => this.instance.get("/logout")
    isloggedin = () => this.instance.post("/isloggedin")

}

const authService = new AuthService();

export default authService;