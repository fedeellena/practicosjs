function hacerCafe(cafe, azucar, leche) {
    var instrucciones = "Hervir agua,";
    instrucciones += " verter el agua en una taza, "
    instrucciones += " agregar " + cafe + " cucharadas de café,";
    instrucciones += " agregar " + cafe + " cucharadas de azúcar,";
    instrucciones += " agregar " + leche + " % de leche,";
    instrucciones += " revolver"
    return instrucciones;

}
console.log(hacerCafe(2, 1, 30));