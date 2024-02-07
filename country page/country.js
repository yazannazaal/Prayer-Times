


function sendCountryToAPI(){
  let select = document.getElementById("countSelect");
  let selectedOption = select.options[select.selectedIndex];
  let selectedCountry = selectedOption.getAttribute("id");
  let countryLabel = document.querySelector(".countryLabel")
  countryLabel.classList.add("labelClass")
  countryLabel.innerHTML = `Your selected country is ${selectedOption.getAttribute("name")}`
  // handleBetween(selectedCountry)
  clearCityOptions()
  if(selectedCountry === "SA"){
    addCityOption("Makkah al Mukarramah",selectedCountry)
    addCityOption("Ar Riyāḑ",selectedCountry)
    addCityOption("Ash Sharqīyah",selectedCountry)
    addCityOption("Tabūk",selectedCountry)
    addCityOption("	Al Madīnah al Munawwarah",selectedCountry)
  }else if(selectedCountry === "EG"){
    addCityOption("Al Fayyūm",selectedCountry)
    addCityOption("Al Iskandarīyah",selectedCountry)
    addCityOption("Al Ismā'īlīyah",selectedCountry)
    addCityOption("Al Qāhirah",selectedCountry)
    addCityOption("	Aswān",selectedCountry)
    addCityOption("	Asyūţ",selectedCountry)
  }else if(selectedCountry === "US"){
    addCityOption("California",selectedCountry)
    addCityOption("	Florida",selectedCountry)
    addCityOption("New York",selectedCountry)
    addCityOption("Texas",selectedCountry)
    addCityOption("Washington",selectedCountry)
  }else if(selectedCountry === "PS"){
    addCityOption("Al Quds",selectedCountry)
    addCityOption("Gaza",selectedCountry)
    addCityOption("Jenin",selectedCountry)
    addCityOption("Qalqilya",selectedCountry)
    addCityOption("Nablus",selectedCountry)
  }  
}


function prayer(city,country) {
    

    axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: {
        country:`${country}`,
        city:`${city}`
    }
  })
  .then(function (response) {
    let timings = response.data.data.timings;
    let date = response.data.data.date.readable;
    let day = response.data.data.date.hijri.weekday.ar;
    timingPrayer("fajr",timings.Fajr)
    timingPrayer("duhr",timings.Dhuhr)
    timingPrayer("asr",timings.Asr)
    timingPrayer("mughr",timings.Maghrib)
    timingPrayer("isha",timings.Isha)
    // putDate(date,day)
    // setName(selectedNameInArabic)
  })
  .catch(function (error) {
    console.log(error);
  })
   
  }

  function timingPrayer(prayID,timing){
    document.getElementById(prayID).innerHTML = timing;
  }
  // function putDate(date,day){
  //   document.getElementById('dateText').innerHTML = `${day}  ${date}`;
  // }

//  function setName(city){
//     let name = document.getElementById('cityName');
//     name.innerHTML = city;
//  } 

 function addCityOption(city,country){
  let citySelect = document.getElementById("citySelect");
  let option = document.createElement("option");
  option.innerHTML = city;
  option.setAttribute("id",city)
  option.setAttribute("name",country)
  citySelect.add(option);
 }
 function sendCityToAPI(){
  let select = document.getElementById("citySelect");
  let selectedOption = select.options[select.selectedIndex];
  let selectedCity = selectedOption.getAttribute("id");
  let selectedCountry = selectedOption.getAttribute("name");
  let cityLabel = document.querySelector(".cityLabel")
  cityLabel.classList.add("labelClass")
  cityLabel.innerHTML = `Your selected country is ${selectedOption.getAttribute("id")}`
  prayer(selectedCity,selectedCountry)
  
 }
 function clearCityOptions() {
  let citySelect = document.getElementById("citySelect");
  for (let i = citySelect.options.length - 1; i > 0; i--) {
    citySelect.remove(i);
}}
