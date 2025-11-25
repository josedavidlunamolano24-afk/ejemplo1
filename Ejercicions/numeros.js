function numeros(){
    let numeritos = [1,2,3,4];
    console.log(numeritos[2]);
    console.log(numeritos[0]);
    console.log(numeritos);
    numeritos[2] = 7;
    console.log(numeritos);
    numeritos[4]=22;
    console.log(numeritos);
    numeritos.push(33);
    console.log(numeritos);
}
numeros();