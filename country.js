

const affiche = document.getElementById('region')
// const clikable = document.getElementById('click')
const input = document.getElementById('myInput')
const bouton = document.getElementById('dark')
const select = document.getElementById('countrie')
const error = document.getElementById('error');
// console.log(select);

// console.log(input)
function afficheDesPays(pays) {
    affiche.innerHTML = '';

    pays.forEach(country => {
        const div = document.createElement('div')
        
        div.innerHTML = `
        <div class="country">
        <img src = "${country.flags.png}"><br>
        <h4> ${country.name.common}<h4><br>
        <span> region: ${country.region}</span><br>
        <span> population: ${country.population}</span><br>
        <span> Capital: ${country.capital}</span><br>`

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

             afficheDesPays(data)    

                    })   

                }
            })

           select.addEventListener('change', function(e){
            console.log(select.value);
            fetch(`https://restcountries.com/v3.1/region/${select.value}`)
           
            .then(pays => pays.json())
            .then(region => { 
                afficheDesPays(region)
           
           }) 
        })



        select.addEventListener('change', function() {
            // affiche.innerHTML = '';
            const input = select.value;
            const paysTrouves = afficheDesPays(input);

            if(paysTrouves.length > 0) {
                afficheDesPays(paysTrouves)
                error.style.display = 'none';
            }else {
                error.style.display = 'block'
            }
        })

        




        
       

    
          })
       

            
            
            
            
           
          


    

        // }

        //    ) 

        




