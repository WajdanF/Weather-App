const key = "NBPyMehS2Ae36P67B1zsK6EDfRsscs47";

//get city weather
getCondition = async (id) => {
     const base = "http://dataservice.accuweather.com/currentconditions/v1/";
     const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


//get city info
const getCity = async (city) => {
 const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};






//getCity is called first and then passed through GetCondition with the key which is returend (chaining promises)
// getCity("Manchester")
//     .then((data) => {
//         return getCondition(data["Key"]);
//     })
//     .then((data) => {
//         console.log(data);
//      })
//     .catch((err) => {
//         console.log(err.messsage);
//     });
