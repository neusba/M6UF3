// Funciones para el registro de usuarios

let nom = document.getElementById('validationNom');
let surnames = document.getElementById('validationCognoms');
let dni = document.getElementById('validationDNI');
let username = document.getElementById('validationUsername');
let email = document.getElementById('validationEmail');
let phone = document.getElementById('validationTelf');

$(nom).on('focusout', () => {checkyEmpty(nom)})
$(surnames).on('focusout', () => {checkyEmpty(surnames)})
$(dni).on('focusout', () => {validateNIF_NIE(dni)})
$(email).on('focusout', () => {validateEmail(email)})
$(phone).on('focusout', () => {validatePhone(phone)})

$('#form-user-register').submit(function(e) {
    e.preventDefault();
    
    checkyEmpty(nom)
    checkyEmpty(surnames)
    validateNIF_NIE(dni)
    validateEmail(email)
    validatePhone(phone)
});

// name and surnames
function checkyEmpty(string) {
    if (string.value == '') {
        string.classList.remove('is-valid');
        string.classList.add('is-invalid');
        notification(string.id.substring(10), 'Aquest camp no pot estar buit!');
        return false;
    } 
    // document.getElementById(`feedback${(string.id.substring(10))}`).innerHTML = "";
    string.classList.remove('is-invalid');
    string.classList.add('is-valid');
    return true;
}

// Mensaje para marcar el estado de los elementos
function notification(element, message) {
    let feedbackElement = document.getElementById(`feedback${element}`); 
    feedbackElement.innerHTML = `<p class="invalid-feedback">${message}</p>`; 
    let feedbackMessage = document.querySelectorAll('.invalid-feedback');
    feedbackMessage.forEach(el => { el.style.display = 'block'; });
}

// Comprueba DNI 
function validateNIF_NIE(dni){
    if (checkyEmpty(dni)) {
      value = dni.value;
      var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
      var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      var str = value.toString().toUpperCase();
  
      if (!nifRexp.test(str) && !nieRexp.test(str)) {
        dni.classList.remove('is-valid');
        dni.classList.add('is-invalid');
        notification(dni.id.substring(10), 'El DNI és invàlid!');
        return false;
      }
  
      var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');
  
      var letter = str.substr(-1);
      var charIndex = parseInt(nie.substr(0, 8)) % 23;
  
      if (validChars.charAt(charIndex) === letter) {
        dni.classList.remove('is-invalid');
        dni.classList.add('is-valid');
        return true;
      }
      dni.classList.remove('is-valid');
      dni.classList.add('is-invalid');
      notification(dni.id.substring(10), 'El DNI és invàlid!');
      return false;
    }
    return false;
}

// Comprueba email
function validateEmail(email) {
  if (checkyEmpty(email)) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      return true;
    }
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    notification(email.id.substring(10), 'El correu és invàlid!');
  }
  return false;
}

// Comprueba móvil
function validatePhone(phone) {
  if (checkyEmpty(phone)) { 
    var tlfRegexp = /^\d{9}$/;
    if (phone.value.match(tlfRegexp)) {
      phone.classList.remove('is-invalid');
      phone.classList.add('is-valid');
      return true;
    }
    phone.classList.remove('is-valid');
    phone.classList.add('is-invalid');
    notification(phone.id.substring(10), 'El telèfon és invàlid!');
  }
  return false;
}

document.querySelector('.input-group-text').addEventListener('click', function() {
    let username = "";
  
    username += nom.value.charAt(0).toLowerCase(); // Primera lletra del nom en minúscula
    username += surnames.value.charAt(0).toUpperCase(); // Primera lletra del primer cognom en majúscula
    username += (surnames.value.replace(/ /g,'')).substring(1, 4).toLowerCase(); // Quitem l'espai entre el primer i segon cognom i següents 3 lletres dels cognoms en minúscula
    for (let i = 0; i < 7; i++) {
      if (i % 2 == 0) username += dni.value.charAt(i); // Numeros de posicions senars del DNI
    }
  
    document.getElementById('validationUsername').value = username;
  });
