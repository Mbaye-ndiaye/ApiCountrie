

const affiche = document.getElementById('region')
// const clikable = document.getElementById('click')
const input = document.getElementById('myInput')
const bouton = document.getElementById('dark')
const select = document.getElementById('countrie')
console.log(select);

// console.log(input)


fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(r => {
    
     
        function afficheDesPays(r) {
            r.forEach(ville => {
                const div = document.createElement('div')
                
                div.innerHTML = `
                <div class="country">
                <img src = "${ville.flags.png}"><br>
                <h4> ${ville.name.common}<h4><br>
                <span> region :${ville.region}</span><br>
                <span> population :${ville.population}</span><br>
                <span> Capital:${ville.capital}</span><br>`

                affiche.appendChild(div)
            })

        bouton.addEventListener('click', function(){
            document.body.classList.toggle('color')
            flex.style.background = 
            
            bouton.classList.toggle('color')
        })

       
            
        }
        afficheDesPays(r)

           

            input.addEventListener('input', function() {
                if(input.value == '') {
                    alert('merci de saisir un pays')
                } else {
                    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
                    .then(pays => pays.json())
                    .then(data => {
                        
                        affiche.innerHTML = '';
                        
            

             afficheDesPays(data)    


                    })
                    

                }
            })

           select.addEventListener('click', function(){
            fetch(`https://restcountries.com/v3.1/name/region/${input.value}`)
           
            .then(pays => pays.json())
            .then(region => {
                
                console.log(region);
            
    
                affiche.innerHTML = '';

                
         
            
           })


            
            
            
            
           
          


    

        }

           ) 

        
});



