function hello () {
    const wow = document.querySelector('h1');
    if (wow.innerHTML === "Hello Everyone !"){
        wow.innerHTML = "Have A Nice Day!!";
    } else{
        wow.innerHTML = "Hello Everyone !"
    }
}


// function back () {
//     document.querySelector('h1').innerHTML = "Hello Everyone!";
// }
let counter = 0;
function count(){
    counter++;
    document.querySelector('p').innerHTML = counter;
    if (counter %10 === 0){
        alert(`Count reached to ${counter}`)
    }
}