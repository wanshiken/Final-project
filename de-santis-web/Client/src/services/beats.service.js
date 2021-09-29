import axios from 'axios';

class BeatsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/admin/beats`
        })
    }

    getBeats = () => this.instance.get("/");
    getOneBeat= (id) => this.instance.get(`/${id}`);
    editBeat = (id) => this.instance.put(`/${id}/editar`);
    createBeat = (track) => this.instance.post("/", track);
    deleteBeat = (id) => this.instance.delete(`/${id}/eliminar`);
}

export default BeatsService;