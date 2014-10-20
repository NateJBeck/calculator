// Ruby: say_hello_to_user
//   JS: sayHelloToUser

function priorfunk(){
  var leftValue = document.getElementById("left").value;
  console.log(leftValue);
  return false;
}
// tells program to wait until all html is run before binding to things/

$(function(){
  $("#theForm").submit(calculate);
});

function calculate(){
  // $() is a jquery method, wrapping the other stuff
  // this is JS--  var leftValue = Number(document.getElementById("left").value);
  // var rightValue = Number(document.getElementById("right").value);
  // document.getElementById("operator").value;
  // document.getElementById("result");
  //resultElement.innerText = result
  //console.log(sumValue);

  var leftValue = Number($("#left").val());
  var rightValue = Number($("#right").val());
  var operator = $("#operator").val();

  var resultElement = $("#result");

  if( operator === "+" ){
    var result = leftValue + rightValue;
  } else if( operator === "-" ){
    var result = leftValue - rightValue;
  } else if( operator === "x" ){
    var result = leftValue * rightValue;
  } else if( operator === "/" ){
    var result = leftValue / rightValue;
  } else if( operator === "^" ){
    var result = Math.pow(leftValue, rightValue);
  }
  else {
    var result = "No can do dude";
  }

  resultElement.text(result);

  return false;
}
