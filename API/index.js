const cep = document.getElementById('cep');

cep.addEventListener('blur', async function() {
    alert("Aguarde a API trazer a resposta!");

    const url = 'https://viacep.com.br/ws/' + cep.value + '/json/';

    const resposta = await fetch(url);

    const resposta_json = await resposta.json();

    console.log(resposta_json);

    preenchendo(resposta_json);
})

function preenchendo(response){
    document.getElementById('estado').value = (response.estado);
    document.getElementById('logradouro').value = (response.logradouro);
    document.getElementById('bairro').value = (response.bairro);
    document.getElementById('cidade').value = (response.localidade);    
}