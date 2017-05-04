function clearScreen(){
  $('#screen').text('');
}

function calculate(eq){
  eq = eq.replace(/x/, '*');
  eq = eq.replace(/÷/, '/');
  var result = eval(eq);
  console.log(result);
  clearScreen();
  return result;
}

function processInput(){

  var onScreen = $('#screen').text();

  if($(this).is('#equals') ){
    $('#screen').text(calculate(onScreen));
  }
  if($(this).text() === 'C'){
    clearScreen();
  }
  else if(!$(this).is('#equals')){//
    onScreen += $(this).text();
    $('#screen').text(onScreen);
  }
}


var buttons = $('.buttons').children('span');

buttons.push($('#zero')[0]);

for(button of buttons){
  $(button).on('click', processInput);
}
