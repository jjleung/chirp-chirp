function chirp(n){

  if(n === 0){
    return ' ';
  }
  var str = 'chirp ';
  return str + chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});