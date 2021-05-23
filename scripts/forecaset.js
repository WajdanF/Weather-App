const key = '3VyqKK9wGHz2k8umNkaZ9QTsNnONuckP'; 

const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query) ;
    const data = await response.json();

    return data[0];
}

getCity('Manchester') 
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.messsage);
});