require('dotenv').config()
const key = process.env["googlekey"]
const axios = require('axios')

async function bar() {
    try {
        const city = 'Kyiv'

        const requestedUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&type=restaurant&key=${key}`
        console.log(requestedUrl)
        const {data} = await axios.get(requestedUrl)
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}

bar()