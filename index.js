const conteiner=document.querySelector('.conteiner')


//funcao que trata a API com 'async await' ,'fetch' e 'json'.
const fetchapi= async ()=>{
    const dado= await fetch('https://rickandmortyapi.com/api/character')
    const response =await dado.json()

//retorna um obj contendo a resposta da 'API'.
   return response
   
}


//funcao que cria uma div que representa cada personagem com metodos de manipulaçao de dom
const creatPerson =(p) =>{
    
//metodo 'createElement' cria um elemento HTML.
    const person=document.createElement('div')
    person.className='person'
   

    const personImg=document.createElement('img')
    personImg.src=p.image
    personImg.className='personImg'

//metodo 'appendChild' e usado para add um elem dentro de outro como filho.
    person.appendChild(personImg)

    const personName=document.createElement('h1')
    personName.innerHTML= `<p class='personName'>${p.name}<p><br>`
    person.appendChild(personName)
    


    const personSpecies=document.createElement('p')
    personSpecies.innerHTML+= `<p class='personInf'>${p.species}<br>`
    person.appendChild(personSpecies)


    const personOrigIN=document.createElement('P')
    personOrigIN.innerHTML+= `<p class='personInf'>${p.origin.name}<br>`
    person.appendChild(personOrigIN)
    
    return person    
}

//funçao que reutiliza as funçoes para renderizar os personagem 
const character=async()=>{
    const response=  await fetchapi()

    response.results.map(p=>{
        const person=creatPerson(p)
        conteiner.appendChild(person)
      

    })
}


const filterCharacter= async (e)=>{
//'e.preventDefault'  evita o comportamento padrão do evento submit do formulário
    e.preventDefault()
    
    const response= await fetchapi()
    const nameBusca=document.querySelector('.nameBusca').value
    
    //remove todos elementos de personagens existatente .
    const person =document.querySelectorAll('.person')
    person.forEach(p => p.remove())

        
        
    //filtra os resultados com o 'filter' e cria novos elementos/personagem com base no returno do filter.
        response.results.filter(p=> p.name.toUpperCase().includes(nameBusca.toUpperCase())).map(p=>{
           const person=creatPerson(p)
           conteiner.appendChild(person)
            
        });
        
    }

    
const buscar=document.querySelector('.buscar')
buscar.addEventListener('click',filterCharacter)



character()


