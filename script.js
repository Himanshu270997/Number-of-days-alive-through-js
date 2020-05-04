
//alert("Hello");

function ageindays(){
   var count = prompt("when was ur birthday");
   var ageindayss = count*365;
   console.log(count);
   var h1 = document.createElement('h1');
   var textanswer = document.createTextNode('You are' + ageindayss + "days");
   h1.setAttribute('id', 'ageindays');
   h1.appendChild(textanswer);
   document.getElementById('flex-box-result').appendChild(h1);
   
}
function reset() {
   document.getElementById('ageindays').remove();
}
