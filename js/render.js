const cardCountry = document.getElementById('card-country')

function renderTemplate(countries){
     countries.forEach(({flag, name, capital, population, region}) => {
        const div = document.createElement('div')
        div.className="card-country"
        div.innerHTML=`
           <img src="${flag}" loading="lazy" alt="">
             <div class="details">
               <h3>${name}</h3>
               <p>Capital: ${capital}</p>
               <p>Region: ${region}</p>
               <p>Population: ${population}</p>
             </div>
        `
        cardCountry.appendChild(div)
}); 
   
}   
    

export default renderTemplate