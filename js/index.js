function clearScreen(){
  $('#screen').empty();
}

function calculate(eq){

  // replace 'x' char with * op
  eq = eq.replace(/x/, '*');
  //replace '÷' char with / op
  eq = eq.replace(/÷/, '/');

  if( eq.match(/^[+\-*\/].*/) !== null
      || eq.match(/[+\-*\/]{2}/) !== null
      || eq.match(/[+\-*\/]$/)){
    return 'ERROR';
  }

  // evaluate expression
  var result = eval(eq);
  clearScreen();
  clearOnNum = true;

  if(result === undefined || result === Infinity){
    return 'ERROR';
  }
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
  else if($('#screen').text() === 'ERROR'){
    console.log('cannot enter anything while "ERROR" is displyed');
    return;
  }
  else if(!$(this).is('#equals')){

    //should handle whether an op or a num is pressed after eval
    //ideally, it should append the op, but clear if a num is pressed.
    if(clearOnNum){
      if(!$(this).hasClass('operator')){
        //console.log($(this));
        clearScreen();
        onScreen = '';
      }
      clearOnNum = false;
    }

    onScreen += $(this).text();
    $('#screen').text(onScreen);
  }

  lastKey = $(this);
}


var buttons = $('.buttons').children('span');
buttons.push($('#zero')[0]);

var clearOnNum = false;

for(button of buttons){
  $(button).on('click', processInput);
}
