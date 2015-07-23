// get all the keys button
var keys = document.querySelectorAll('#calculator span');

// add the onclik event to all the keys and perform operations

for(var i=0; i<keys.lenght; i++){
  keys[i].onclick = function(e){
    // get the input and button values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
  }
}