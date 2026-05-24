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

for ()


