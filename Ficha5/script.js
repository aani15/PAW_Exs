  "use strict";

function starUp() {
    let bt = document.getElementById("button");
    bt.addEventListener("click", function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                getCountries(this);
            }
        };
        xmlhttp.open("GET", "countries.json", true);
        xmlhttp.send();
    });
}


function getCountries(file) {
    let jsonDoc = JSON.parse(file.responseText);
    let x = "";
    for (let i = 0; i < jsonDoc.countries.length; i++) {
        x = x.concat("<p>" + "<b>Name:</b>" + jsonDoc.countries[i].name + 
        "</br>" + "<b>Code:</b>" + jsonDoc.countries[i].code + "</p>");
        document.getElementById("demo").innerHTML = x;
    }
}