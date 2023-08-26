
let sliderElement = document.querySelector("#slider");
let buttonElent = document.querySelector("#button");

let sizepassaword = document.querySelector("#valor");
let passaword = document.querySelector("#passaword");

let containerPassaword = document.querySelector("container-passaword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXY0123456789!@";
let novaSenha = "";

sizepassaword.innerHTML = sliderElement.value;

slider.oniput = function(){
    sizepassaword.innerHTML = this.value;
}

function generatepassaword(){

    let pass = "b!";
    for()
}