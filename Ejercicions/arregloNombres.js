function nombres(){
let nombrest=[];
nombrest.push("ana");
nombrest.push("luis"); 
nombrest.push("carlos");   
nombrest[3]="maria";
nombrest.splice(0,1, "pedro");
console.log(nombrest);
}
nombres(); 