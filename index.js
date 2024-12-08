function getweather(){
  let cityname= document.getElementById("temp1").value;
  alert(cityname)
  //crud=c=create===post  r=read===get  u=update===put  d=delete===delete

  //if promise fullfill  response is  in then otherwise in catch 
  axios.get(`https://api.weatherapi.com/v1/current.json?key=89008c7d0f6d430f9c774318242010&q=${cityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    let weatherdata=response.data;
    console.log(weatherdata);
    console.log(weatherdata.current.temp_c)
    console.log(weatherdata.current.temp_f)
    console.log(weatherdata.current.humidity)
    console.log(weatherdata.location.country);
   // document.write(weatherdata.current.temp_c) (we write this simply to show result on document)
    //we can also use queryselector by  getElementById 
    // to upgrade  document msg we use this
    document.querySelector("#change").innerHTML=(`Your today temperature in ${cityname} in celcius is ${weatherdata.current.temp_c}`)
    document.querySelector("#againchange").innerHTML=(`Your today temperature in farhenheight is ${weatherdata.current.temp_f}`)
    document.getElementById("againchange1").innerHTML=(` Today humidity in ${cityname} is ${weatherdata.current.humidity}`)
    document.getElementById("againchange2").innerHTML=(`  Your search location  is in ${weatherdata.location.country}`)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}