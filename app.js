const PORT = 8000
const axios = require('axios')

const cheerio = require('cheerio')
const express = require('express')

const bob = express()
const url =  'https://summerofcode.withgoogle.com/programs/2022/organizations'
axios(url)
.then(response=>{
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.name', html).each(function () { //<-- cannot be a function expression
        const name = $(this).text()
        const breifdescription =$('.bd').text();
        const techstack = $('.tech__content').text();
        const field = $('.topics__content').text();
        articles.push({
            title,
            breifdescription,
            techstack,
            field
        })
    })
    console.log(articles)
}).catch(err => console.log(err))
bob.listen(PORT,() => console.log('server running on PORT ${PORT}'))

