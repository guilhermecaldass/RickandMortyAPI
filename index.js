const fetchapi= async ()=>{
    const dado= await fetch('https://rickandmortyapi.com/api/character')

    const response =await dado.json()
console.log(response);
   return response
   

    
}
    
const character=async()=>{
    const response=  await fetchapi()
  

    const conteiner=document.querySelector('.conteiner')


    response.results.map(p=>{
        const person=document.createElement('div')
        person.className='person'
        conteiner.appendChild(person)

        const personImg=document.createElement('img')
        personImg.src=p.image
        personImg.className='personImg'
        person.appendChild(personImg)

        const personName=document.createElement('h1')
        personName.innerHTML= `<p class='personName'>${p.name}<p><br>`
        person.appendChild(personName)
        


        const personSpecies=document.createElement('p')
        personSpecies.innerHTML+= `<p class='personSpecies'>${p.species}<br>`
        person.appendChild(personSpecies)


        const personOrigIN=document.createElement('P')
        personOrigIN.innerHTML+= `<p class='personOrigin'>${p.origin.name}<br>`
        person.appendChild(personOrigIN)
        
        

    })
}


const filterCharacter= async (e)=>{
  
    e.preventDefault()
    
    
    const conteiner=document.querySelector('.conteiner')
    
    const nameBusca=document.querySelector('.nameBusca').value
    
    const response= await fetchapi()
    
    const person =document.querySelectorAll('.person')
    
    
    
        person.forEach(p => p.remove())

        
        
        
        response.results.filter(p=> p.name.toUpperCase().includes(nameBusca.toUpperCase())).map(p=>{
            const person=document.createElement('div')
            person.className='person'
            conteiner.appendChild(person)
            
            const personImg=document.createElement('img')
            personImg.src=p.image
            personImg.className='personImg'
            person.appendChild(personImg)
            
            const personName=document.createElement('h1')
            personName.innerHTML= `<p class='personName'>${p.name}<p><br>`
            person.appendChild(personName)
            
            
            
            const personSpecies=document.createElement('p')
            personSpecies.className='personSpecies'
            personSpecies.innerHTML+= `${p.species}<br>`
            person.appendChild(personSpecies)
            
            
            const personOrigIN=document.createElement('P')
            personOrigIN.className='personOrigin'
            personOrigIN.innerHTML+= `${p.origin.name}<br>`
            person.appendChild(personOrigIN)
            
        });
        
    }

    
const buscar=document.querySelector('.buscar')
buscar.addEventListener('click',filterCharacter)



character()


