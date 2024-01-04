const PORT = 8000


const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')


const app = express()

const url = 'https://allsportsapi.com/soccer-football-api-documentation'
const arr = []

axios(url)
    .then(response => {
        const html = response.data
        // console.log(html);
        const $ = cheerio.load(html)
        console.log($);
        $('.nav-link', html).each(function () {
            const match = $(this).text()
            arr.push(match)
            console.log(match);
        })
        console.log(arr);
    })


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))