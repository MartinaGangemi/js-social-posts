// Creiamo il nostro array di oggetti che rappresentano ciascun post. 
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card
const post = [
    {  
        id:1,
        autore: "Franco", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/18/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:56
    },

    {
        id:2, 
        autore: "Akiruno", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/13/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes:87
    },

    {
        id:3, 
        autore: "Niko", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/12/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes:45
    },

    {
        id:4, 
        autore: "Vermillion", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/08/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image", 
        likes: 44
    },
    
    {  
        id:5,
        autore: "Peppe", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/04/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:80
    },

    {  
        id:6,
        autore: "Flavio", 
        fotoAutore:"https://unsplash.it/50/50?image" , 
        data: "03/04/2022", 
        testoPost:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, est!", 
        immagine:"https://unsplash.it/500/300?image",
        likes:80
    }
]

// console.log(post)

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
        <img src="${singoloPost.fotoAutore}" alt="" class="foto_profilo"> 
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
    // Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
    
    // const btnLike = divElement.querySelector(".like")
    // btnLike.addEventListener("click", function() {
    //     this.style.color="#6495ED"
    //     singoloPost.likes = singoloPost.likes+1
    //     // console.log(singoloPost.likes)
    //     const likePlus = document.getElementById(singoloPost.id)
    //     likePlus.innerHTML = `
    //     <div class="new_like" id="${singoloPost.id}"> 
    //         Piace a <b>${singoloPost.likes}</b> persone
    //     </div>`

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
       

   
       
    //   }, {once : true});
     
}



const date2 = new Date('18-08-2022');
console.log(date2)