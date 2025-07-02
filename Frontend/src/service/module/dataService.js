import axios from 'axios';

const TEST_URL_PREFIX = 'http://127.0.0.1:5000/api/test';
const LORA_URL_PREFIX = 'http://127.0.0.1:5000';


export function fetchHello(param, callback) {
    const url = `${TEST_URL_PREFIX}/hello/`;
    axios.post(url, param)
        .then(response => {
            callback(response.data)
        }, errResponse => {
            console.log(errResponse)
        })
}













