  // Logica Saudação
  
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();        
  
  
     if(h > 0 && h <10){
  
       document.body.style.background = '#e2cd9f'
  } else if(h>10 && h<12){
    
    document.body.style.background = '#e2cd9f'
   }  else if (h > 12 && h < 18){             
   
    document.body.style.background = '#b9846f'
} else{

  document.body.style.background = '#515154'
}

      const urlD = `https://economia.awesomeapi.com.br/json/last/USD-BRL`
      const urlE = `https://economia.awesomeapi.com.br/json/last/EUR-BRL`
      let dolar = document.getElementById('dolar');
      let euro = document.getElementById('euro');

      fetch(urlD).then((usd)=>{
        return usd.json();
      }).then((usd)=>{
        dolar.innerHTML += `<b>Dolar<b>: ${usd.USDBRL.ask}`
      })
      .catch((err) => {
        dolar.innerHTML += `Erro de Operação, verifique se o Dev sabe o que faz. :p`
      })


      fetch(urlE)
      .then((eur) =>{
        return eur.json();
        })
      .then((eur) =>{
        euro.innerHTML = `<b>Euro<b>: ${eur.EURBRL.ask}`;
        
        })
      .catch((err) => {
        euro.innerHTML += `Erro de Operação, verifique se o Dev sabe o que faz. :p`
      })
      

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

let tittle4 = document.getElementById('tittle4');
let intro4  = document.getElementById('intro4');
let link4 = document.getElementById('link4')

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

      tittle4.innerHTML = `${req.articles[3].title}`
      intro4.innerHTML = `${req.articles[3].description}`
      

})