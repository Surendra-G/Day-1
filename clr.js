// document.querySelector('#Red').onclick = function(){
//     document.querySelector('h1').style.color = "Red";
// };
// document.querySelector('#Blue').onclick = function(){
//     document.querySelector('h1').style.color = "Blue";
// };
// document.querySelector('#Green').onclick = function(){
//     document.querySelector('h1').style.color = "Green";
// };

document.querySelector('select').onchange = function() {
    document.querySelector('h1').style.color = this.value;
};

