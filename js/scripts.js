/*LOGIN*/
function validar(){
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

if (usuario=="ldileo" && contrasena == "coder" ) {
    location.href  = "../index.html"
    alert("Bienvenido " + usuario + " nuevamente");
    
    
}   
else{
    alert("Verifica tus credenciales")
}
}
/*Condicionales*/
let products =[];
let total = 0;
total.toFixed();

/*Agergar al carrito*/
function add (product, price){
    console.log(product,price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML =  `Pagar $${total.toFixed(3)}`;
}
/*Pagar carrito*/
function pay () {
    
    window.alert(products.join(", \n"));
}

/*Lista de Compras*/
