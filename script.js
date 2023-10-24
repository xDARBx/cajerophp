let pinOriginal = 1234;
let balance = 5000;
let pinEntrada;
let opcion;
let opcionesCajero;
let intentos = 0;

alert("Bienvenido a PHP Banking")
opcion = parseInt(prompt("1. Operar\n" + "2. Salir\n"));

while (opcion !== 1 && opcion !==2){
 opcion = parseInt(prompt("Ingrese una opción correcta\n" + "1. Operar\n" + "2. Salir\n"))
}


        
while (opcion === 1) {
    
  pinEntrada = parseInt(prompt("Ingresa tu pin: "));
  
  
  
  if (intentos === 2 ) {
    alert("Has ingresado el PIN incorrectamente 3 veces. No me vas a Hackear.\n" + "Este cajero se autodestruirá en 3...2...1.");
    pinOriginal = 4321;
    break;
  }

if (pinEntrada === pinOriginal) {
    while (true) {
      opcionesCajero = parseInt(prompt("1. Consultar saldo\n" + "2. Depositar saldo\n" + "3. Extraer saldo\n" + "4. Salir\n"));

      switch (opcionesCajero) {
        case 1:
          alert("Su saldo es de: $" + balance);
          break
          
            //EVITAR EL INGRESO DE DEPOSITO NEGATIVO//
        /*case 2:
          const deposito = parseInt(prompt("Ingrese la suma deseada: $"));
          if(deposito < 0){
                 alert("ingresó un valor negativo.")
             }else{
                balance += deposito; 
          alert("Su nuevo saldo es de: $" + balance)
        }*/
        case 2:
          let deposito;
        do {
        deposito = parseInt(prompt("Ingrese la suma deseada: $"));
        if (deposito <= 0) {
            alert("El monto debe ser mayor que cero. Intente nuevamente.");
        }
        } while (deposito <= 0);
            balance += deposito; 
          alert("Su nuevo saldo es de: $" + balance)
          break       
             
          

        case 3:
            
            //VALIDAR COMO EN CASE 2 EL NO RETIRO DE SALDO NEGATIVO//
          let extraccion;
          do { 
              extraccion = parseInt(prompt("Ingrese la suma a debitar: $"));
        if (extraccion <=0 ){
            alert("El monto debe ser mayor a 0. Intente nuevamente")
        }
        }while (extraccion <= 0 );
            balance -= extraccion;
          alert("Su nuevo saldo es de: $" + balance)
          break

        case 4:
          opcion = 2;
          
          break

        default:
          alert("Opción no válida")
      }

      if (opcionesCajero === 4) {
        break;
      }
    }
  } else {
    alert("Pin incorrecto. Intento " + (intentos + 1) + " de 3");
   intentos++;
  }
}
if (opcion === 2) {
        alert("Hasta Luego Babos@.")
    }
