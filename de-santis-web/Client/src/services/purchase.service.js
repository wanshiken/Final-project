import axios from 'axios';

class PurchaseService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/purchase`
        })
    }
    //TODO la llamdada tiene que usar un ID real no :id , algo como ${id}
    createPurchase = (data, id) => this.instance.post(`/${id}`, data);
}

export default PurchaseService;