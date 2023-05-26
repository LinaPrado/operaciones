function operaciones(){
    let num1, num2;
    num1 = parseInt(document.getElementById('numero1').value);
    num2 = parseInt(document.getElementById('numero2').value);
    sum = num1 + num2;
    rest = num1 - num2;
    multi = num1 * num2;
    div = num1 / num2;
    alert("la suma es: " + sum + 
    "\n la resta es: " + rest + 
    "\n la multiplicacion es: " + multi + 
    "\n la division es: " + div);


}
