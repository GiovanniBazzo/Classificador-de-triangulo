function diferenteDeNulo() {
    console.log("Executado")
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    if (lado1 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    } else if (lado2 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    } else if (lado3 <= 0) {
        document.getElementById("resultado").innerHTML = "Isso não é um triângulo!"
        return
    }

    function classificacao() {
        if (lado1 === lado2 && lado1 === lado3) {
            document.getElementById("resultado").innerHTML = "O triângulo é Equilátero: Todos os três lados são iguais."
        } else if ((lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1) && (lado1 !== 0 || lado2 !== 0 || lado3 !== 0)) {
            document.getElementById("resultado").innerHTML = "O triângulo é Isósceles: Exatamente dois lados são iguais."
        } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
            document.getElementById("resultado").innerHTML = "O triângulo é Escaleno: Todos os três lados são diferentes."
        }
    }

    classificacao()
}


