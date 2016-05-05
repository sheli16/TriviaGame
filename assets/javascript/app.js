$(document).ready(function() {


    console.log("ready!");
   // computernumber();
   // crystalNumbers();

//function computernumber = Math.floor((Math.random() * 100) + 19;
    var Trivia = [];
    Trivia[0]= "In 1973 this singer had one of Discos earliest hits";
    Trivia[1]= "In 1975 Harold Melivin and the Blue notes had this hit";
    Trivia[2]= "In 1975 'What am I going to do with you' became this singers big hits"; 
    Trivia[3]= "Night Fever sung by this group became an all time hit in 1977";
    Trivia[4]= "Donna Summer had many hits, but this one would leave you on the dance Floor";
   // a1: "Don Downing",
    //a2: "The Love I lost",
    //a3: "Barry White", 
    //a4: "Bee Gees",
    //a5: "Last Dance" 
    console.log(Trivia[4]);
    
   // var answers = [
   //["Don Downing", "Michael Jackson", "Frank Sinatra", "Sylverster"],
    //["The Love I lost", "a", "b", "c"],
    //["Barry White", "a", "b", "c"],
    //["Bee Gees","a", "b", "c"],
    //["Last Dance","a", "b", "c"]];
   
    
    var wronganswers = []; 
    wronganswers[0] ="Michael Jackson";
    wronganswers[1] ="Janet Jackson";
    wronganswers[2] ="Donald Trump";
    wronganswers[3] ="Kiss";
    wronganswers[4] ="Queen";
    wronganswers[5] ="Cool and the Gang";
    wronganswers[6] ="Gloria Gaynor";
    wronganswers[7] ="Daffy Duck";
    wronganswers[8] ="Luke Skywalker";
    wronganswers[9] ="Mr Roper";

var correctanswer = 0
var badanswer =0

 var rightanswers = [];
    rightanswers[0] ="Don Downing";
    rightanswers[1] ="The Love I lost";
    rightanswers[2] ="Barry White";
    rightanswers[3] ="Bee Gees";
    rightanswers[4] ="Last Dance";


   
$('#start').on('click', function() {
  console.log("works");
   triviaquestions();
 });

function triviaquestions() {
  var min = 0
  var max = 4 
  var number = Math.floor(Math.random()*(max-min+1)+min);
  var randomquestions = Trivia[number];
    console.log(randomquestions);
    $('#Questions').html('<h4>'+ randomquestions +'</h4>');
  
if (number = 0 ){
correctanswer = rightanswers[0]
  $("#1q").html('<li><p>'+ correctanswer  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[2]  +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[3]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[4]  +'</p></li>');
$("#1q").on('click', function(gotitright) 
  });
  
  if (number = 1){
    correctanswer = rightanswers[0]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[1]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  $('#3q').on('click', function(gotitright); 
  console.log("got it right");
 });
 
 if (number = 2){
  correctanswer = rightanswers[2]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[2]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  $('#3q').on('click', function(gotitright); 
  console.log("got it right");
});
  if (number = 3){
    correctanswer = rightanswers[4]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[3]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  $('#3q').on('click', function(gotitright); 
  console.log("got it right");
});
if (number = 4){
  correctanswer = rightanswers[4]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ rightanswers[4]  +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[6] +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  $('#2q').on('click', function(gotitright); 
  console.log("got it right");
});
if (number = 5){
    correctanswer = rightanswers[5]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[7] +'</p></li>');
  $("#4q").html('<li><p>'+ rightanswers[5]  +'</p></li>');
  $('#4q').on('click', function(gotitright); 
  console.log("got it right");
});
else
{
    $('#q').on('click', function(gotitwrong) {
{
  if (clickCounter++ === 0) {crystalNumbers()};
}
}


function gotitright(){
  $("score").html('<h5>'+ correctanswer +'</5>');
}


function gotitWrong(){
$("score").html('<h5>'+ badanswer +'</5>');
}




timer()
}
function timer(){
var timeLeft = 30;
var elem = document.getElementById('clock');
var timerId = setInterval(countdown, 300000);
$('#clock').html('<h1>'+ timerId +'</h1>');
function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    triviaquestions();
  } else {
    timer.innerHTML = timeLeft + 'seconds';
    timeLeft--;
  };

 };

//var seconds = Math.floor( (t/1000) % 60 );

count: function(){
    stopwatch.time++;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#display').html(converted);
  },
  timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds; 
};

};
};

});



//if number = 2
   //$("#1q").html('<li><p>'+ answers[1]  +'</p></li>');
   // console.log(answers[number,1]);
  //  console.log(number);

    //if number = 1
  

   //$("#1q").html('<li><p>'+ answers[1]  +'</p></li>');
    //console.log(answers[number,1]);
    //console.log(number);
     
     //$("#2q").html('<li><p>'+ answers[number,1] +'</p></li>');
    //console.log(answers[number,1]);
     // console.log(number);
     // $("#3q").html('<li><p>'+ answers[number,2] +'</p></li>');
    //console.log(answers[number,2]);   
      
    //$("#4q").html('<li><p>'+ answers[number,3] +'</p></li>');
   // console.log(answers[number,3]);

//$('#1q').on('click', function() {
 // console.log("works");
 




















//function stop(){
//   console.log('stopping');
//   clearInterval(counter);
// }
//
// function recordLap(){
//   var converted = timeConverter(time);
//   $('#laps').append('<p>Lap ' + lap + ' : ' + converted + '</p>');
//   lap++;
// }
//
// function count(){
//   time++;
//   var converted = timeConverter(time);
//   $('#display').html(converted);
// }
//
// function timeConverter(t){
//   var minutes = Math.floor(t/60);
//   var seconds = t - (minutes * 60);
//   if (seconds < 10){
//     seconds = "0" + seconds;
//   }
//   if (minutes === 0){
//     minutes = "00";
//   } else if (minutes < 10){
//     minutes = "0" + minutes;
//   }
//   return minutes + ":" + seconds;
// }




