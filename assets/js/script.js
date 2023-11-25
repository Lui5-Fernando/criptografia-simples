var btnCrip = document.querySelector("#bnt-crip")
var btnDescrip = document.querySelector("#bnt-descrip")
var textoEntrada = document.querySelector("#texto-entrada")
var textoSaida = document.querySelector("#texto-saida")
var btnFalar = document.querySelector("#btn-falar")
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
caracteres = [" ", "@"]

btnCrip.addEventListener("click", () => {
    var textoOriginal = textoEntrada.value.toLowerCase()
    var textoCriptografado = ""
    btnFalar.style.display = "none"

    for (var i = 0; i < textoOriginal.length; i++) {
        var char = textoOriginal[i]
        if(caracteres.includes(char)){
            var index = caracteres.indexOf(char)
            var novoChar = caracteres[(index + 1) % caracteres.length]
            textoCriptografado += novoChar
        }else if(alpha.includes(char)){
            var index = alpha.indexOf(char)
            var novoChar = alpha[(index + 1) % alpha.length]
            textoCriptografado += novoChar
        }else{
            textoCriptografado += char
        }
    }

    textoSaida.textContent = textoCriptografado;
})

btnDescrip.addEventListener("click", () => {
    var textoOriginal = textoEntrada.value.toLowerCase()
    var textoCriptografado = ""
    btnFalar.style.display = "block"

    for (var i = 0; i < textoOriginal.length; i++) {
        var char = textoOriginal[i]
        if(caracteres.includes(char)){
            var index = caracteres.indexOf(char)
            var novoChar = caracteres[(index - 1 + caracteres.length) % caracteres.length]
            textoCriptografado += novoChar
        }else if(alpha.includes(char)){
            var index = alpha.indexOf(char)
            var novoChar = alpha[(index - 1 + alpha.length) % alpha.length]
            textoCriptografado += novoChar
        }else{
            textoCriptografado += char
        }
    }

    textoSaida.textContent = textoCriptografado
})

document.addEventListener('DOMContentLoaded', function () {
    var btnCopiar = document.querySelector("#btn-copiar")

    btnCopiar.addEventListener('click', function () {
        if (textoSaida.textContent.trim() !== "") {
            textoSaida.select()
            document.execCommand('copy')
            window.getSelection().removeAllRanges()
            alert('Texto copiado!');
        }
    })
})



btnFalar.addEventListener("click", () =>{
    if(speechSynthesis.speaking === false){
        var texto = document.querySelector("#texto-saida").value
        var voz = new SpeechSynthesisUtterance(texto)
        
        
        voz.lang = "pt-BR"
        voz.pitch = 1
        voz.volume = 1
        voz.rate = 1

        speechSynthesis.speak(voz)
    }
})
