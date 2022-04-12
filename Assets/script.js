var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c5e2743a27e54bd936717a3a50177cad'
var city = "";
var citySearched = (".searchedCity")
var 

fetch(queryURL)
.then(function (res) {
  return res.json();
})
.then(function (data) {
  console.log(data)
})
.catch(function (err) {
  console.error(err);
});



// $(document).ready(function () {
//     $('#submitbtn').on('click', function () {
//         var 


//     }

// })

        //document.getElementById("todayForecast").addEventListener("click", function (){
        //     var url =
        //       "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=47df8d2fc95bd2276afc9a1564aea00e";
        //     fetch(url)
        //       .then(function (response) {
        //         return response.json();
        //       })
        //       .then(function (data) {
        //         // create img element
        //         var img = document.createElement("img");
        //         // get icon code
        //         var iconCode = data.current.weather[0].icon;
        //         // somehow create a valid icon url?
        //         var imgUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        //         // set src attribute to icon url
        //         img.setAttribute("src", imgUrl);
        //         // append img to page
        //         document.body.appendChild(img);
        //       });
        //   });
// let cities = empty array
// let cityData = stored todos
// IF cityData is not null
//    cities = cityData
// END IF
// call displayButtons

// func displayButtons
//    remove all previous buttons
//    loop through cities array
//    create a button for each city
//    append button to container element

// let container = button container element
// add event listener for clicks on container

// func handleButtonContainerClick
//    let element = clicked element (aka event.target)
//    IF element is a city button
//        get city name from button
//        get weather for that city
//    END IF

// func addCityButton cityName
//     add cityName to cities
//     update stored city data
//     call displayButtons


//Data for Current Weather API
//Forecast Weather Data API
//Search Weather Data API 