function frutas(){
let frutast=[];
frutast.push("manzana");//agrega un dato en el arreglo
frutast.push("banana"); // agrega un dato en el arreglo 
frutast.push("fresa");//  agrega un dato en el arreglo   
frutast.unshift("kiwi");// agrega un dato al inicio del arreglo
frutast.pop(frutast);// elimina el ultimo dato del arreglo
frutast.shift(frutast);// elimina el primer dato del arreglo
console.log(frutast);
}
frutas();
