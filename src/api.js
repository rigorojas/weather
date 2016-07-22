let rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=30d4f5b2038a8b73139044f69026e30c';

let kelvinToF = () => {
    return Math.round((kelvin - 273.15) * 1.8 +32) + ' ˚F'
};

let Api = (latitude, longitude) => {
    let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return {
                name: json.name,
                temperature: kelvinToF(json.main.temp),
                description: json.weather[0].description
            }
        });
}

export default Api;
