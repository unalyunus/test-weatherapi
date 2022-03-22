function App() {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text"); 
  const src = document.getElementById("src");
 
  

  btn.addEventListener("click",() => {
      
      (async () => {
  
          try {
             
         const city_weather = await getWeather(src.value);
      
         const dt = new Date((city_weather.dt) * 1000);
         const weather = city_weather.weather[0].description;
         const temp = city_weather.main.temp + -273.15;
         const temp_min =  city_weather.main.temp_min + -273.15;
         const temp_max =  city_weather.main.temp_max + -273.15;
  
         
         text.innerHTML = `City-Name: ${city_weather.name}
         <br> Weather:  ${weather}
         <br> Time:     ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} 
         <br> Temp:     ${parseInt(temp)}&deg;C
         <br> Min-Temp: ${parseInt(temp_min)}&deg;C
         <br> Max-Temp: ${parseInt(temp_max)}&deg;C `;
         
        

         } catch (error) {
      
             console.log(error);
         }
        })();
  
  })    
  
  const getWeather = (city_name) => {
      return new Promise(async (resolve, reject) => { 
         
        const data = await ( 
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=eb46232dfa5c8fcc1ce3b8c5a1041358
            `)
        ).json();
          
          resolve(data);
        
        });
  }; 
  
  
  
  
  
  
}

export default App;
