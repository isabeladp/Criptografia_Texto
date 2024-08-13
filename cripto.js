function criptografar() {
    const inputText = document.getElementById("Texto").value;
    let textoCriptografado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("Texto_criptografado").innerText = textoCriptografado;
}

function descriptografar() {
    const inputText = document.getElementById("Texto_criptografado").innerText;
    let textoDescriptografado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("Texto_criptografado").innerText = textoDescriptografado;
}

function copiarTexto() {
    const outputText = document.getElementById("Texto_criptografado").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}
