const conteiner=document.querySelector('.conteiner')



const fetchapi= async ()=>{
    const dado= await fetch('https://rickandmortyapi.com/api/character')
    const response =await dado.json()
console.log(response);
   return response
   

    
}

const creatPerson =(p) =>{
    
    const person=document.createElement('div')
    person.className='person'
   

    const personImg=document.createElement('img')
    personImg.src=p.image
    personImg.className='personImg'
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
    
const character=async()=>{
    const response=  await fetchapi()
    response.results.map(p=>{

        const person=creatPerson(p)
        conteiner.appendChild(person)
      

    })
}


const filterCharacter= async (e)=>{
    e.preventDefault()
    
    const response= await fetchapi()
    const nameBusca=document.querySelector('.nameBusca').value
    const person =document.querySelectorAll('.person')
    
        person.forEach(p => p.remove())

        
        
        
        response.results.filter(p=> p.name.toUpperCase().includes(nameBusca.toUpperCase())).map(p=>{
           const person=creatPerson(p)
           conteiner.appendChild(person)
            
        });
        
    }

    
const buscar=document.querySelector('.buscar')
buscar.addEventListener('click',filterCharacter)



character()


