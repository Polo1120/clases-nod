function sumar(a,b){
    return a+ b;
}
exports.sumar = sumar;



function multiplicion(a,b){
    return a* b;
}

exports.multiplicion=multiplicion;



function division(a,b){

    if(b===0){
        return "no se puede dividir entre 0";
    }
return a/b;
}

exports.division= division;


function resta(a,b){
    return a-b;
}

exports.resta= resta;


