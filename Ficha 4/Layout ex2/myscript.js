document.querySelector("div").addEventListener("click", 
function(e){
    var randomColor = 'rgb(' + Math.floor(1 + Math.random() * 255) 
    + ',' + Math.floor(1 + Math.random() * 255) + ',' 
    + Math.floor(1 + Math.random() * 255) + ')';
    e.target.style.backgroundColor = randomColor;
});