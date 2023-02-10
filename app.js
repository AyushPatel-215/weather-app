// const request = require("request");
const getcode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

getcode(address ,(error,{lantitude,longitude,location}) => {
    if(error)
        return error
    console.log('our location is: '+lantitude+' '+longitude+' '+location)

    forecast(lantitude, longitude, (error,data) => {    
        if(error)
            return error

        console.log('Weather is'+data)
    })
})


