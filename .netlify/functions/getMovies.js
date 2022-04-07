const axios = require('axios');

exports.handler = async function (event, context) {

    const API_KEY = process.env.API_KEY;
    const BASE_URL_SEARCH = process.env.BASE_URL_SEARCH;
    const query = event.queryStringParameters.query;

    const URL = `${BASE_URL_SEARCH}?api_key=${API_KEY}&query=${query}`;

    try {
        const response = await axios.get(URL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}