var variable1 = "Soy la variable 1";

let variable2 = "Soy la variable 2";

function varTest() {
    let variable3 ="Soy la variable 3";
    let x = 31;

    if (true) {
        let x = 71;
        console.log(x);
    }
    console.log(x);
    
}

let nueva_variable2="Holi ";
console.log(nueva_variable2);

const nuevaFuncion = () => {
    var x=31;
    if(true){
        var x=71;
        console.log(x);
    }
    console.log(x);
}

function letTest(){
    var x=31;
    if(true){
        var x=71;
        console.log(x);
    }
    console.log(x);
}

nuevaFuncion();
/* letTest(); */

console.log(nueva_variable2);

/* console.log(variable3); */
varTest();

const increment = (num) => num + 1;

console.log(increment(41)); // => 42