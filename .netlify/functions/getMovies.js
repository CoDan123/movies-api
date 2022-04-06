const axios = require('axios');

exports.handler = async function (event, context) {
    
    const query = event.queryStringParameters.query;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=&query=${query}`;

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