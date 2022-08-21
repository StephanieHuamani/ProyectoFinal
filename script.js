const formulario = document.getElementById("form")

formulario.addEventListener('submit', function(e){
e.preventDefault();
let email = document.getElementById('emailForm').value
console.log(email)
formulario.reset()
})