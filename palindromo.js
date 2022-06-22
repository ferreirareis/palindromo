// Atividade 1
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

// Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

//solução 1
function identificaPalindromo(string){
    if(!string) return "string inexistente";

    //o string.split("") irá separar tdas as letras da string transformando-a em um array e assim utilizaremos o método reverse para invertermos a ordem dos caracteres. E depois com o .join() iremos juntar todos os caracteres novamente.
    return string.split("").reverse().join("") === string
}

//console.log(identificaPalindromo(""));

//solução 2
function identificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i=0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(identificaPalindromo2("abba"));