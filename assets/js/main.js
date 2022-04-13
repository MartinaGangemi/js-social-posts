//Formattare le date in formato italiano (gg/mm/aaaa)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
    const date = randomNumber(1,28)
    const month = randomNumber(1,12)
    const year = randomNumber(2020,2022)
    const dataAmericana = `${month}/${date}/${year}`
    const dataEuropea = `${date}/${month}/${year}`


// Creiamo il nostro array di oggetti che rappresentano ciascun post. 
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card

const post = [
    {  
        id:1,
        autore: "Franco", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:56
    },

    {
        id:2, 
        autore: "Akiruno", 
        fotoAutore:" " , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes:87
    },

    {
        id:3, 
        autore: "Niko", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes:45
    },

    {
        id:4, 
        autore: "Vermillion Melone", 
        fotoAutore:" " , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes: 44
    },
    
    {  
        id:5,
        autore: "Peppe", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:80
    },

    {  
        id:6,
        autore: "Flavio", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: dataEuropea, 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:80
    }
]


// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
const likeId = []

//seleziono l'elemento della DOM dove inserirò i vari post
const indexElement = document.getElementById("post")

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
for (let i=0; i<post.length; ++i){
    const singoloPost = post[i]
    //creo un elemento div
    divElement = document.createElement("div")
    //al div aggiungo la sua classe
    divElement.classList.add("single_post")
    indexElement.append(divElement)

    
    divElement.innerHTML = `
    <div class="d-flex align-items-center mb-4">
        <div class= "avatar me-3" >
            <img src="${singoloPost.fotoAutore}" alt="" class="foto_profilo">
        </div> 
        <div class="lh-1">
            <b>${singoloPost.autore}</b>
            <br>
            <span class="font_size-s">${singoloPost.data}</span>
        </div>
    </div>
    ${singoloPost.testoPost}
    <img src="${singoloPost.immagine}" alt="" class= "mt-4">
    <div class = "d-flex justify-content-around mt-4"> 
        <div role="button" class="like"><b><i class="fa-solid fa-thumbs-up"></i> Mi piace</b></div>
        <div class="new_like" id="${singoloPost.id}"> Piace a <b>${singoloPost.likes}</b> persone</div>
    </div>
    `

    // Milestone 3
    // Al click su un pulsante "Mi Piace" di un post, 
    // se abbiamo già cliccato dobbiamo decrementare il contatore e 
    // cambiare il colore del bottone.

    const btnLike = divElement.querySelector(".like")
    btnLike.addEventListener("click", addLike)
        function addLike (){
           this.classList.toggle("blu")
            let likePlus = document.getElementById(singoloPost.id)
           
            if (this.classList.contains("blu")) {
                singoloPost.likes= singoloPost.likes+1
            
            likePlus.innerHTML = `
            <div class="new_like" id="${singoloPost.id}"> 
                Piace a <b>${singoloPost.likes}</b> persone
            </div>`
            likeId.push(singoloPost.id)
            } else {
                singoloPost.likes= singoloPost.likes-1
                likePlus.innerHTML = `
            <div class="new_like" id="${singoloPost.id}"> 
                Piace a <b>${singoloPost.likes}</b> persone
            </div>`
            likeId.pop(singoloPost.id)
              }

            console.log(likeId)    
        } 

        // Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
        
        const userName = singoloPost.autore;
        const arrName = userName.split(" ");
    
        for (var k = 0; k < arrName.length; k++) {
            arrName[k] = arrName[k].charAt(0).toUpperCase()
        }
    
        const firstLetter = arrName.join(" ");

        if(singoloPost.fotoAutore === " " ){
        const immagineProfilo = divElement.querySelector(".avatar")
        immagineProfilo.classList.add("nopicture")
        
        immagineProfilo.innerHTML=`
        <span">
        ${firstLetter}
        </span>`
        }     
      
}

    