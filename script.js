
function check() {
   
    let a = 0;
    let b = 0;
    let result = 0;
    
    var x = document.getElementById("i-1").value;
    document.getElementById("i-1").value = "";

    console.log(x);
    
    let radio = document.querySelectorAll('.i-7');
    for (let i = 0; i < radio.length; i++){
       if (radio[i].checked) {
           a = radio[i].value;
            break;
        }
    }
    console.log(a);

    let radio2 = document.querySelectorAll('.check');
    for (let j = 0; j < radio2.length; j++){
        if (radio2[j].checked) {
            b = radio2[j].value;
            break;
        }
    }
    console.log(b);

    result = a * b * x;
    console.log(result);

    var el = document.getElementById('rezult').value = result;
    
}


