const axios = require('axios');

exports.handler = async function (event, context) {

    const API_KEY = process.env.API_KEY;
    const BASE_URL_TRENDING = process.env.BASE_URL_TRENDING;
    const URL = `${BASE_URL_TRENDING}?api_key=${API_KEY}`;

    try {
        const response = await axios.get(URL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    }catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}