// Funciones para el registro de  pisos

let districtes = document.getElementById("districtes")
let barris = document.getElementById("barris");
barris.disabled = true;

fetch("getDistricts.php")
.then((response) => response.json())
.then((data) => {
    data.forEach(value => {
        let option = document.createElement("option");
        option.value = value.name; 
        option.innerHTML = value.name; 
        districtes.appendChild(option); 
    });
})
.catch((error) => {console.log("Error")});

districtes.addEventListener("change", function() {
    barris.disabled = false;
    barris.innerHTML = "";

    let formData = new FormData();
    formData.append("id", districtes.selectedIndex);
    let options = {
        method: 'POST',
        body: formData
    }

    fetch("getBarris.php", options)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(value => {
            let option = document.createElement("option"); 
            option.value = value.name; 
            option.innerHTML = value.name;  
            barris.appendChild(option); 
        });
    })
})

$('#form-user-register').submit(function(e) {
    e.preventDefault();
    let textPis = document.getElementById("nomPis");
    let textDir = document.getElementById("dir");
    let textPreu = document.getElementById("preu");
    let textText = document.getElementById("text");

    let nom_pis = document.getElementById("nom_pis");
    let districtes = document.getElementById("districtes");
    let barris = document.getElementById("barris");
    let via = document.getElementById("vies");
    let nom_via = document.getElementById("nom_via");
    let numero_via = document.getElementById("numero_via");
    let pis = document.getElementById("pis");
    let escala = document.getElementById("escala");
    let porta = document.getElementById("porta");
    let cp = document.getElementById("cp");
    let preu = document.getElementById("preu_pis");
    let textarea = document.getElementById("textarea");

  
    textPis.innerHTML = nom_pis.value + ": " + districtes.options[districtes.selectedIndex].text + ", " + barris.options[barris.selectedIndex].text;
    textDir.innerHTML = `${via.options[via.selectedIndex].text} ${nom_via.value} ${numero_via.value} ${pis.value} ${escala.value} ${porta.value} · ${cp.value} · ${districtes.options[districtes.selectedIndex].text} · ${barris.options[barris.selectedIndex].text}`;
    textPreu.innerHTML = preu.value;
    textText.innerHTML = textarea.value;
});
  