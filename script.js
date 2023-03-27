var userInput = $('.input-area')
var searchBtn = $('.searchBtn')

var topcityName = $('.top-city-name')
var topTemp = $('.top-temp')
var topWind = $('.top-wind')
var topHumidity = $('.top-humidity')

var boxOneDate = $('.box-one-date')
var boxOneTemp = $('.box-one-temp')
var boxOneWind = $('.box-one-wind')
var boxOneHumidity = $('.box-one-humidity')

var boxTwoDate = $('.box-two-date')
var boxTwoTemp = $('.box-two-temp')
var boxTwoWind = $('.box-two-wind')
var boxTwoHumidity = $('.box-two-humidity')

var boxThreeDate = $('.box-three-date')
var boxThreeTemp = $('.box-three-temp')
var boxThreeWind = $('.box-three-wind')
var boxThreeHumidity = $('.box-three-humidity')

var boxFourDate = $('.box-four-date')
var boxFourTemp = $('.box-four-temp')
var boxFourWind = $('.box-four-wind')
var boxFourHumidity = $('.box-four-humidity')

var boxFiveDate = $('.box-five-date')
var boxFiveTemp = $('.box-five-temp')
var boxFiveWind = $('.box-five-wind')
var boxFiveHumidity = $('.box-five-humidity')

var baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
var apiKey = 'c99d36592ac7f6c76c8592278329bdfb'
var url = baseURL + '?appid=' + apiKey

function getLocation(){
    navigator.geolocation.getCurrentPosition(function(locationData){
    $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).
    then(function(data){

        var timeStamp = data.list[0].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        topcityName.html(' ' + data.city.name + ' ' + '(' + formattedDate + ')')

        var tempConv = ((data.list[0].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        topTemp.html('Temperature: ' + rounded + symFahr)
        
        topWind.html('Wind: ' + data.list[0].wind.speed + ' ' + 'MPH')

        topHumidity.html('Humidity: ' + data.list[0].main.humidity + '%')

        


        var timeStamp = data.list[5].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        boxOneDate.html(formattedDate)

        var tempConv = ((data.list[5].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        boxOneTemp.html('Temperature: ' + rounded + symFahr)
        
        boxOneWind.html('Wind: ' + data.list[5].wind.speed + ' ' + 'MPH')

        boxOneHumidity.html('Humidity: ' + data.list[5].main.humidity + '%')




        var timeStamp = data.list[13].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        boxTwoDate.html(formattedDate)

        var tempConv = ((data.list[13].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        boxTwoTemp.html('Temperature: ' + rounded + symFahr)
        
        boxTwoWind.html('Wind: ' + data.list[13].wind.speed + ' ' + 'MPH')

        boxTwoHumidity.html('Humidity: ' + data.list[13].main.humidity + '%')




        var timeStamp = data.list[21].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        boxThreeDate.html(formattedDate)

        var tempConv = ((data.list[21].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        boxThreeTemp.html('Temperature: ' + rounded + symFahr)
        
        boxThreeWind.html('Wind: ' + data.list[21].wind.speed + ' ' + 'MPH')

        boxThreeHumidity.html('Humidity: ' + data.list[21].main.humidity + '%')




        var timeStamp = data.list[29].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        boxFourDate.html(formattedDate)

        var tempConv = ((data.list[29].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        boxFourTemp.html('Temperature: ' + rounded + symFahr)
        
        boxFourWind.html('Wind: ' + data.list[29].wind.speed + ' ' + 'MPH')

        boxFourHumidity.html('Humidity: ' + data.list[29].main.humidity + '%')




        var timeStamp = data.list[37].dt
        var pubDate = new Date(timeStamp * 1000)
        var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        var formattedDate = 
            monthname[pubDate.getMonth()] + ' '
          + pubDate.getDate() + ', ' + pubDate.getFullYear()

        boxFiveDate.html(formattedDate)

        var tempConv = ((data.list[37].main.temp - 273.15) * 9/5 + 32)
        var rounded = Math.round(tempConv)
        var symFahr = '\u2109'
        boxFiveTemp.html('Temperature: ' + rounded + symFahr)
        
        boxFiveWind.html('Wind: ' + data.list[37].wind.speed + ' ' + 'MPH')

        boxFiveHumidity.html('Humidity: ' + data.list[37].main.humidity + '%')
});
    })
}
getLocation()

searchBtn.click(function () {
        
    var apiURL = baseURL + '?q=' + userInput.val()
    var cityURL = apiURL + '&appid=' + apiKey
    
        $.get(cityURL).
        then(function(data) {
    
            var timeStamp = data.list[0].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            topcityName.html(' ' + data.city.name + ' ' + '(' + formattedDate + ')')
    
            var tempConv = ((data.list[0].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            topTemp.html('Temperature: ' + rounded + symFahr)
            
            topWind.html('Wind: ' + data.list[0].wind.speed + ' ' + 'MPH')
    
            topHumidity.html('Humidity: ' + data.list[0].main.humidity + '%')
    
    

            var timeStamp = data.list[5].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            boxOneDate.html(formattedDate)
    
            var tempConv = ((data.list[5].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            boxOneTemp.html('Temperature: ' + rounded + symFahr)
            
            boxOneWind.html('Wind: ' + data.list[5].wind.speed + ' ' + 'MPH')
    
            boxOneHumidity.html('Humidity: ' + data.list[5].main.humidity + '%')
    
    
    

            var timeStamp = data.list[13].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            boxTwoDate.html(formattedDate)
    
            var tempConv = ((data.list[13].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            boxTwoTemp.html('Temperature: ' + rounded + symFahr)
            
            boxTwoWind.html('Wind: ' + data.list[13].wind.speed + ' ' + 'MPH')
    
            boxTwoHumidity.html('Humidity: ' + data.list[13].main.humidity + '%')
    
    
    

            var timeStamp = data.list[21].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            boxThreeDate.html(formattedDate)
    
            var tempConv = ((data.list[21].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            boxThreeTemp.html('Temperature: ' + rounded + symFahr)
            
            boxThreeWind.html('Wind: ' + data.list[21].wind.speed + ' ' + 'MPH')
    
            boxThreeHumidity.html('Humidity: ' + data.list[21].main.humidity + '%')
    
    
    
    
            var timeStamp = data.list[29].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            boxFourDate.html(formattedDate)
    
            var tempConv = ((data.list[29].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            boxFourTemp.html('Temperature: ' + rounded + symFahr)
            
            boxFourWind.html('Wind: ' + data.list[29].wind.speed + ' ' + 'MPH')
    
            boxFourHumidity.html('Humidity: ' + data.list[29].main.humidity + '%')
    
    
            

            var timeStamp = data.list[37].dt
            var pubDate = new Date(timeStamp * 1000)
            var monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var formattedDate = 
                monthname[pubDate.getMonth()] + ' '
              + pubDate.getDate() + ', ' + pubDate.getFullYear()
    
            boxFiveDate.html(formattedDate)
    
            var tempConv = ((data.list[37].main.temp - 273.15) * 9/5 + 32)
            var rounded = Math.round(tempConv)
            var symFahr = '\u2109'
            boxFiveTemp.html('Temperature: ' + rounded + symFahr)
            
            boxFiveWind.html('Wind: ' + data.list[37].wind.speed + ' ' + 'MPH')
    
            boxFiveHumidity.html('Humidity: ' + data.list[37].main.humidity + '%')
    });
        })


