function calcularAreaTriangulo(base, altura) {
   return (base * altura) / 2;

}
for (let i = 1; i<=3; i++){
    let base = parseFloat(prompt(`triangulo ${i}: ingrese la base:`))
    let altura = parseFloat(prompt(`triangulo ${i}: ingrese la altura:`))

    if (base > 0 && altura > 0) {
        let area = calcularAreaTriangulo(base, altura)
        console.log(`Area del triangulo ${i}: ${area}`)
    } else {
        console.log(`Triangulo ${i}: Error en los Datos (base y altura deben ser mayor que 0).`)
    }
}

/*--------------------------------*/

function convertirAFahrenheit(celsius){
    return (celsius / 5) * 9 + 32
}

for (i = 1; i <=  5; i++){
    let temp = parseFloat(prompt("Dame la temperatura en celcius para coonvertira fahrenheit: "))
    
if (isNaN(temp)){
    console.log("Error de parametro ingresa un numero valido")
} else {
    let resultadoFah = convertirAFahrenheit(temp);
    console.log(temp + "°C son " + resultadoFah + "°F");
}
}

/*-----------------------------------------------*/

function contarVocales(texto) {
    let contador = 0;
    let minusculas = texto.toLowerCase()
    
    for (let i = 0; i < minusculas.length; i++) {
        let letra = minusculas[i]
         if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++;
         }
        }
        return contador;
    }
    for (let i = 1; i <= 3;i++ ){
        let texto =prompt(`Texto ${i}: Ingresa un texto para contar sus vocales:`);

        if (texto === null || texto)
    }