$(document).ready(function() {


    console.log("ready!");
   // computernumber();
   // crystalNumbers();

//function computernumber = Math.floor((Math.random() * 100) + 19;
    var Trivia = [4];
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
    
    var answers = [];
    answers[0] = "Don Downing", "Michael Jackson", "Frank Sinatra", "Sylverster";
    answers[1] = "The Love I lost", "a", "b", "c";
    answers[3] = "Barry White", "a", "b", "c";
    answers[4] = "Bee Gees","a", "b", "c";
    answers[5] = "Last Dance","a", "b", "c";
   
    

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

    $("#list-group-item list-group-item-success").html('<p>'+ answers[number,0] +'</p>');
    console.log(answers[number,0]);
    $('#list-group-item list-group-item-info').html('<li>'+ answers[number,1] +'</li>');
    $('#list-group-item list-group-item-warning').html('<li>'+ answers[number,2] +'</li>');
    $('#list-group-item list-group-item-danger').html('<li>'+ answers[number,3] +'</li>');
    
};
});