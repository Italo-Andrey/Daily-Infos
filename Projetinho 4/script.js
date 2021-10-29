/*
  // Logica Saudação

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    
    let dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
    let monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");        
                
     let res = document.getElementById('res')
    let img = document.getElementById('img')
     if(h > 0 && h <10){
      res.innerHTML += `<p>Bom Dia, Usuário! Hoje é ${dayName[today.getDay()]}, ${today.getDate()} de ${monName[today.getMonth()]}, Horário: 0${h}:${m}</p>`   
       img.src="img/sunny.png"
       document.body.style.background = '#e2cd9f'
  } else if(h>10 && h<12){
    res.innerHTML += `<p>Bom Dia, Usuário! Hoje é ${dayName[today.getDay()]}, ${today.getDate()} de ${monName[today.getMonth()]}, Horário: ${h}:${m}</p>`
    img.src="img/sunny.png"
    document.body.style.background = '#e2cd9f'
   }  else if (h > 12 && h < 18){             
    res.innerHTML = `<p>Boa Tarde, Usuário! Hoje é ${dayName[today.getDay()]}, ${today.getDate()} de ${monName[today.getMonth()]}, Horário: ${h}:${m}</p>`
    img.src="img/cloudy-day.png"
    document.body.style.background = '#b9846f'
} else{
  res.innerHTML += `<p>Boa Noite, Usuário! Hoje é ${dayName[today.getDay()]}, ${today.getDate()} de ${monName[today.getMonth()]}, Horário: ${h}:${m}</p>`
  img.src="img/night.png"
  document.body.style.background = '#515154'
}
  

      //API temperatura:
      function getUserPosition() {
        let url1;
        navigator.geolocation.getCurrentPosition((pos) => {
          let lat = pos.coords.latitude;
          let long = pos.coords.longitude;
          url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
          fetchApi(url1);
        });
      }
    
      
    function fetchApi(url1) {
        let city = document.querySelector('.city');
        let temp = document.querySelector('.city');

        fetch(url1)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
          city.innerText = `Hoje a temperatura em ${data.name} é de `;
          city.innerText += ` ${tempInCelsius}°C`;
          console.log(data);

        })
        .catch((err) => {
          city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
          temp.innerText = `-`;
        })
      }
      
      getUserPosition();

*/
      //API Cotações:

    function cotacao(moeda){

      let url2 = `https://economia.awesomeapi.com.br/json/last/${moeda}`
      let ans = document.getElementById('valor');

      fetch(url2)
      .then((cota) =>{
        return cota.json();
        })
      .then((cota) =>{
        console.log(cota);
      if(moeda == 'USD-BRL'){
        let dolar = cota.USDBRL.ask;
        ans.innerHTML = '';
        ans.innerHTML += `Dolar hoje: ${dolar}`
      }
      if (moeda == 'EUR-BRL'){
        let euro = cota.EURBRL.ask;
        ans.innerHTML = '';
        ans.innerHTML += `Euro hoje: ${euro}`
      }
        })
      .catch((err) => {
        ans.innerHTML += `Erro de Operação, verifique se o Dev sabe o que faz. :p`
      })
      
    }

    function dolar(){
      const moeda = `USD-BRL`;
        cotacao(moeda);
    }

    function euro(){
     const moeda = `EUR-BRL`;
      cotacao(moeda);
    }

    //API NOTÍCIAS:
    
    let tittle1 = document.getElementById('tittle1');
let intro1  = document.getElementById('intro1');
let link1 = document.getElementById('link1')

let tittle2 = document.getElementById('tittle2');
let intro2  = document.getElementById('intro2');
let link2 = document.getElementById('link2')

let tittle3 = document.getElementById('tittle3');
let intro3  = document.getElementById('intro3');
let link3 = document.getElementById('link3')
const url3 = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=57aeeb83880a43ffaa8e9ac2fbc3bf06`

let req = new Request(url3)

    fetch(req).then((response)=>{
        return response.json();
    })
    .then((req) =>{
      console.log(req)
      tittle1.innerHTML = `${req.articles[0].title}`
      intro1.innerHTML = `${req.articles[0].description}`

      tittle2.innerHTML = `${req.articles[1].title}`
      intro2.innerHTML = `${req.articles[1].description}`


      tittle3.innerHTML = `${req.articles[2].title}`
      intro3.innerHTML = `${req.articles[2].description}`
      

})