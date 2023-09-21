var nomeClient = document.getElementById("nomeClient");
var addClient = document.getElementById("addClient");
var tabNome = document.getElementById("tabnome");
var dataAt = new Date();
var dia = dataAt.getDate();
var mes = dataAt.getMonth() + 1;
var ano = dataAt.getFullYear();
var hora = dataAt.getHours();
var minuto = dataAt.getMinutes();
var dataCompleta = (dia < 10 ? "0" : "") + dia + "/" +(mes < 10 ? "0" : "") + mes +"/" + ano + " às "   + hora + ":" + minuto;



const cliente = {}



addClient.addEventListener("click", function() {
    event.preventDefault();
    cliente.nome = nomeClient.value;
    tabNome.textContent = cliente.nome;
    horario.textContent = dataCompleta;
})


var deletar = document.getElementById("delete");

deletar.addEventListener("click", function() {

    delete cliente.nome;
    tabNome.textContent = "";
    horario.textContent = "";
    
})