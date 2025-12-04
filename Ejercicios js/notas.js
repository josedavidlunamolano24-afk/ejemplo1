function notass(){
    let notas = [];
        
        for (let i=0; i< 5; i = i + 1){
            let dato = parseFloat(prompt("ingrese la nota " + i));
            notas[i]= dato
            alert("la nota " + i + " es " + notas[i]);
          
        }
        let mensaje = "las notas son:\n";
        for (let i=0; i<5; i = i + 1){
            mensaje = mensaje + notas[i] + "\n";
        }
        alert(mensaje);
    }
    notass();
