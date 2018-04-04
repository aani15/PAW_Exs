"use strict"
let galleryPosition;
let img1 = {
    name = 'Imagem 1',
    link = "./repositorioPAW/Galeria_Imagens/cat-eye.jpg"
};

let img2 = {
    name = 'Imagem 2',
    link = "./repositorioPAW/Galeria_Imagens/dado-a-preto-e-branco.jpg"
};
let img3 = {
    name = 'Imagem 3',
    link = "./repositorioPAW/Galeria_Imagens/paradise.jpg"
};

let img4 = {
    name = 'Imagem 4',
    link = "./repositorioPAW/Galeria_Imagens/estrada.jpg"
};

let imgGallery = [img1, img2, img3, img4];

function setGalleryIndex(galleryPosition){
    document.querySelector('h1').textContent=imgGallery[galleryPosition].name;
    var frame= document.querySelector('iframe');
    frame.src= imgGallery[galleryPosition].link;
  }

(function startGallery() {
    let p = document.createElement('iframe');
    galleryPosition = 0;
    p.src = imgGallery[galleryPosition].link;
    document.querySelector('h1').textContent = imgGallery[galleryPosition].name;
    document.querySelector('div').appendChild(p);
    document.getElementById("previous").disabled=true;
}
)();

function previousImg() {
    if (galleryPosition > 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled=false;
        setGalleryIndex(++galleryPosition);
    } else {
        document.getElementById("previous").disabled = false;
    }
}

function nextImg() {
    if (galleryPosition < imgGallery.length) {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
        setGalleryIndex(++galleryPosition);
    } else {
        document.getElementById("next").disabled = false;
    }
}

document.getElementById("next").addEventListener("click", nextImg);
document.getElementById("previous").addEventListener("click", previousImg);