/*Faz com que quando cliquemos na imagem 1, por exemplo, 
ela passe para a mainArea que é a nossa área principal para as imagens que clicamos*/
function ImgParaMain (i) {
    if (i == 1) {
        document.getElementById("header").src = document.getElementById("img1").src;
    }
    if (i == 2) {
        document.getElementById("header").src = document.getElementById("img2").src;
    }
    if (i == 3) {
        document.getElementById("header").src = document.getElementById("img3").src;
    }
    if (i == 4) {
        document.getElementById("header").src = document.getElementById("img4").src;
    }
}