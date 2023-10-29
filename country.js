
const affiche = document.getElementById('region')
const input = document.getElementById('myInput')
const bouton = document.getElementById('dark')
const select = document.getElementById('countrie')
 let filterCountries = []

function afficheDesPays(pays) {
    affiche.innerHTML = '';

    pays.forEach(villes => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="country">
        <img src = "${villes.flags.png}"><br>
        <h4> ${villes.name.common}<h4><br>
        <span> region: ${villes.region}</span><br>
        <span> population: ${villes.population}</span><br>
        <span> Capital: ${villes.capital}</span><br>`
        affiche.appendChild(div)
    })
bouton.addEventListener('click', function(){
    document.body.classList.toggle('color')
    bouton.classList.toggle('color')
})
   
}
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(r => {
        afficheDesPays(r)

            input.addEventListener('input', function() {
                if(input.value == '') {   
                } else {
                    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
                    .then(pays => pays.json())
                    .then(data => {

                         filterCountries = data
                        // console.log({filterCountries});
                        afficheDesPays(filterCountries)
                    })   

                }
            })

           select.addEventListener('change', function(e){
            // console.log(e.currentTarget.value);
            fetch(`https://restcountries.com/v3.1/region/${select.value}`)
           
            .then(pays => pays.json())
            .then(region => { 

                // console.log();
              
                    
                
             
                    afficheDesPays(region)
           }) 

 
          
        })


   
       
    function paysParContinent() {
        const selectContinent = document.querySelector(".form-select");
        const countrySearch = document.querySelector(".search-country");
        // console.log(countrySearch);
      
        selectContinent.addEventListener("change", updateDisplayedCountries);
        countrySearch.addEventListener("input", updateDisplayedCountries);
      
        function updateDisplayedCountries() {
          const selectedContinent = selectContinent.value.toLowerCase();
          const searchTerm = countrySearch.value.trim().toLowerCase();
          const filteredCountrie = filterCountries.filter((pays) => {
            //   console.log(filteredCountrie, 'ok');
            return (
              (selectedContinent === "all" ||
                pays.region.toLowerCase() === selectedContinent) &&
              pays.name.common.toLowerCase().includes(searchTerm)
            );
          });
          afficheDesPays(filteredCountrie);
        }
      }
      paysParContinent();
      

    })


