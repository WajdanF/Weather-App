const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data)=>{
    const cityDets = data.cityDets;
    const weather = data.weather;
    
    //destructing properties
    //const {cityDets, weather} = data; //does the same thing as above
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
              <div class = 'my-3'>${weather.WeatherText}</div>
              <div class="display-4 my-4">
                  <span>${weather.Temperature.Metric.Value}</span>
                  <span>&deg;C</span>
              </div>    
              `;
    if (weather.isDayTime){
        time.src = 'icons/day.svg';
    }
    else{
        time.src = 'icons/night.svg '
    }
    icon.src=`icons/${weather.WeatherIcon}.svg`;
    //removing d-none
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}
const updateCity = async (city)=>{
    const cityDets = await getCity(city);
    const weather = await getCondition(cityDets['Key']);

    return {
        cityDets:cityDets,
        weather: weather
    }
};
cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //updating city
    updateCity(city).
    then(data =>{
        updateUI(data)
    })
    .catch(err=>{
        console.log(err.message);
    })
});


