




    //randomNumber= Math.floor(Math.random()*(max1-min1+1)+min1);
   // console.log(randomNumber);
    //$('#computerNumber').html('<h5>'+ randomNumber +'</h5>');

   // randomNumber= Math.floor(Math.random()*(max1-min1+1)+min1);
    //console.log(randomNumber);
    $('#computerNumber').html('<h5>'+ randomNumber +'</h5>');

    randomNumber= Math.floor(Math.random()*(max1-min1+1)+min1);
    console.log(randomNumber);
    $('#computerNumber').html('<h5>'+ randomNumber +'</h5>');


    randCrystal1= Math.floor(Math.random()*(max-min+1)+min);
    randCrystal2= Math.floor(Math.random()*(max-min+1)+min);
   randCrystal3= Math.floor(Math.random()*(max-min+1)+min);
   randCrystal4= Math.floor(Math.random()*(max-min+1)+min);
  console.log(randCrystal1);
  console.log(randCrystal2);
   console.log(randCrystal3);
    console.log(randCrystal4);
   
 //}
 
function winslosses (){
console.log(totalCrystals);
console.log(randomNumber);
if (totalCrystals === randomNumber){
  wins++;
  console.log(wins) 
$('#W').html('Total wins '+'<h6>'+ wins +'</h6>');
 
}
else
 
 if
  
  (totalCrystals + 1 > randomNumber){
  losses++;
    $('#L').html('Total losses  '+'<h6>'+ losses +'</h6>');
   
    }
 }


 console.log("ready2");

$('#crystalspurple').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};

  totalCrystals = totalCrystals + randCrystal1;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log('randomNumber');
   console.log(randomNumber);
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
 });

$('#crystalspink').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal2;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
});

$('#crystalsblue').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal3;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
});

   $('#crystalsyellow').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal4;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();




});
});




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