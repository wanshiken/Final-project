import axios from 'axios';

class BeatsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/admin/beats`
        })
    }

    getBeats = () => this.instance.get("/");
    getOneBeat= (id) => this.instance.get(`/${id}`);
    createBeat = (track) => this.instance.post("/", track);
}

export default BeatsService;