// get all the keys button
var keys = document.querySelectorAll('#calculator span');

// add the onclik event to all the keys and perform operations

for(var i=0; i<keys.lenght; i++){
  keys[i].onclick = function(e){
    // get the input and button values
    var input = document.querySelector('.screen');
    // gets the value of the screen
    var inputVal = input.innerHTML;
    // gets the value of the clicked button
    var btnVal = this.innerHTML;

// now append the key values (btnVal) to the input string and use js's eval function to get the result
    // if clear key is pressed, erase everything
    if (btnVal==='C') {
      input.innerHTML= '';
    };

    // if eval key is pressed, calculate and display the result
    if (btnVal==='=') {
      var equation = input
    };

    // if any other key is pressed, just append it
    else{
      input.innerHTML += btnVal;
    }
  }
}