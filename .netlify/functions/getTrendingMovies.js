const axios = require('axios');

exports.handler = async function (event, context) {

    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=087e6e53b047b687bcd13eb7475121ab';

    try {
        const response = await axios.get(url);
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