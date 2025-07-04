// EXECUTAR MASCARAS
function mascara(o, f){
    // define o objeto e chama a função
    objeto = o;
    funcao = f;

    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value = funcao(objeto.value)
}

// mascaras
// telefone
function telefone(variavel){
    variavel = variavel.replace(/\D/g,"")

    variavel = variavel.replace(/^(\d\d)(\d)/g,"($1) $2") // adiciona parenteses em volta dos dois primeiros dígitos.

    variavel = variavel.replace(/(\d{5})(\d)/,"$1-$2") // adiciona hifen entre o quarto e quinto dígito

    return variavel
}

function rgecpf(variavel){
    variavel = variavel.replace(/\D/g,"")

    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2") // adiciona ponto entre o terceiro e quarto dígito

    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2") // adiciona ponto entre o sexto e quarto setimo

    variavel = variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2") // adiciona ponto entre o nono e décimo dígito

    return variavel
}

function data(variavel){
    variavel = variavel.replace(/\D/g,"")

    variavel = variavel.replace(/^(\d\d)(\d)/g,"$1/$2") // adiciona barra depois do segundo digito

    variavel = variavel.replace(/(\d\d)(\d{1,2})/g,"$1/$2") // adiciona barra depois do quarto digito

    return variavel
}

function sus(variavel){
    variavel = variavel.replace(/\D/g,"")

    variavel = variavel.replace(/(\d{6})(\d)/,"$1-$2") // adiciona hifen entre o quarto e quinto dígito

    return variavel
}

function cepcliente(variavel){
    variavel = variavel.replace(/\D/g,"")

    variavel = variavel.replace(/^(\d\d)(\d)/g,"$1.$2") // adiciona barra depois do segundo digito

    variavel = variavel.replace(/(\d{3})(\d)/g,"$1-$2") // adiciona barra depois do quarto digito

    return variavel
}