import {getCountry} from './services.js'
import renderTemplate from './render.js'

const cardCountry = document.getElementById('card-country')
const valor       = document.getElementById('valor')
const form        = document.querySelector('#form')
const filter      = document.querySelector('#filter');

filter.addEventListener('change',(e)=>{
  if(e.target.value ===""){
       cardCountry.innerHTML=""
       getCountry().then(countries=> renderTemplate(countries))
  }else{
      
        getCountry().then(countries=>{
        let filterdata= countries.filter(c=>c.region === e.target.value)
        cardCountry.innerHTML=""
        renderTemplate(filterdata)
   })
  }
  
})

valor.addEventListener('keyup',e =>{
    e.preventDefault();
    const valorName = valor.value.charAt(0).toUpperCase()+ valor.value.slice(1);

    getCountry().then(countries=>{
      cardCountry.innerHTML=""

      countries.filter((country)=>{
        if(country.name.includes(valorName))  {
            const div = document.createElement('div')
            div.className="card-country"
            div.innerHTML=`
                <img src="${country.flag}" loading="lazy" alt="">
                <div class="details">
                  <h3>${country.name}</h3>
                  <p>Capital: ${country.capital}</p>
                  <p>Region: ${country.region}</p>
                  <p>Population: ${country.population}</p>
                </div>
            `
            cardCountry.appendChild(div)
          }
    
      })
  })
})

getCountry().then(countries=> renderTemplate(countries))


  