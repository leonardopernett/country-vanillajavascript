
export const  getCountry =() =>{
    return fetch("../api.json")
     .then(res=>res.json())
     .then(data=>{
         return data.map((country)=>{
            const {flag, name, region , population, capital}= country;
            return {flag, name, region , population, capital}
         })
     })
  }
