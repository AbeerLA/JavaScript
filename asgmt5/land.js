let {checkCondition} = require ('./checkWeather')

const weatherData = {
    temperature : 26,
    humidity : 60,
    winSpeed : 20
}


let result = checkCondition(weatherData)
console.log(result);