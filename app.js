    const inputValue = document.querySelector("#cityName");
        const API_KEY = '0909502029355100ef3b5bec522eac16';

        const handleSubmit = () => {
            const city = inputValue.value.trim();
            if (!city) {
                document.getElementById('result').innerText = "Please enter a city name!";
                return;
            }

            document.getElementById('result').innerText = "Loading...";

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then(response => {
                    const temp = response.data.main.temp;
                    document.getElementById('result').innerHTML = `
                         <strong>${city}</strong><br>
                        Temperature: ${temp}°C
                    `;
                })
                .catch(error => {
                    console.error(error);
                    document.getElementById('result').innerText = "City not found!";
                });
        };