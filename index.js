 


const fetchapi= async (e)=>{
    const dado= await fetch('https://rickandmortyapi.com/api/character')

    const response =await dado.json()
 
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
        personName.innerHTML+= `${p.species}<br>`
        person.appendChild(personSpecies)


        const personOrigIN=document.createElement('P')
        personName.innerHTML+= `${p.origin.name}<br>`
        person.appendChild(personOrigIN)
        
        console.log(response);

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
            personName.innerHTML+= `${p.species}<br>`
            person.appendChild(personSpecies)
            
            
            const personOrigIN=document.createElement('P')
            personName.innerHTML+= `${p.origin.name}<br>`
            person.appendChild(personOrigIN)
            
        });
        
    }

    
const buscar=document.querySelector('.buscar')
buscar.addEventListener('click',filterCharacter)



character()


