import axios from 'axios';

const productInstance = axios.create({
    baseURL: "https://commerce-43b87.firebaseio.com/"
});

export default productInstance;