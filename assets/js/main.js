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

console.log(post)

//seleziono l'elemento della DOM dove inserirò i vari post
const indexElement = document.getElementById("post")

//faccio un ciclo for per creare i vari post
for (let i=0; i<post.length; i++){
    const singoloPost = post[i]
    divElement = document.createElement("div")
    divElement.classList.add("single_post")
    indexElement.append(divElement)
    divElement.innerHTML = `
    <div class="d-flex align-items-center mb-4"><img src="${singoloPost.fotoAutore}" alt="" class="foto_profilo"> 
    <div class="lh-1">
    <b>${singoloPost.autore}</b>
    <br>
    <span class="font_size-s">${singoloPost.data}</span>
    </div>
    </div>
    <img src="${singoloPost.immagine}" alt="">
    <div class = "d-flex justify-content-around mt-4"> 
        <div>Mi piace</div>
        <div> Piace a ${singoloPost.likes} persone</div>
      </div>
    `
  
}



console.log(indexElement)