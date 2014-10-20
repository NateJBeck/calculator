// Ruby: say_hello_to_user
//   JS: sayHelloToUser

// function sayGoodbye(message){
//   console.log(message);
//   return false;
// }

function calculatezzz(){
  var leftValue = document.getElementById("left").value
    console.log(leftValue);
  return false;
}

// Number("1") + Number("5") = 6

function calculate(){
  var leftValue = Number(document.getElementById("left").value);
  var rightValue = Number(document.getElementById("right").value);

  var operator = document.getElementById("operator").value;
  var resultElement = document.getElementById("result");

  if( operator === "+" ){
    var result = leftValue + rightValue;
  } else if( operator === "-" ){
    var result = leftValue - rightValue;
  } else if( operator === "x" ){
    var result = leftValue * rightValue;
  } else if( operator === "/" ){
    var result = leftValue / rightValue;
  } else if( operator === "^" ){
    var result = Math.pow(leftValue, rightValue)
  }
  else {
    var result = "No can do dude"
  }

  resultElement.innerText = result

    //console.log(sumValue);
    return false;
}


