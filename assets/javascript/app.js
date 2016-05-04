$(document).ready(function() {


    console.log("ready!");
   // computernumber();
   // crystalNumbers();

//function computernumber = Math.floor((Math.random() * 100) + 19;
    var Trivia = [];
    Trivia[0]= "In 1973 this singer had one of Discos earliest hits";
    Trivia[1]= "In 1975 Harold Melivin and the Blue notes had this hit";
    Trivia[2]="In 1975 'What am I going to do with you' became this singers big hits"; 
    Trivia[3]="Night Fever sung by this group became an all time hit in 1977";
    Trivia[4]="Donna Summer had many hits, but this one would leave you on the dance Floor";
    //a1: "Don Downing",
    //a2: "The Love I lost",
    //a3: "Barry White", 
    //a4: "Bee Gees",
   // a5: "Last Dance" 
    
    
    var Randanswers = {
    a1: "Don Downing",
    a2: "The Love I lost",
    a3: "Barry White", 
    a4: "Bee Gees",
    a5: "Last Dance" 
    }
    

$('#start').on('click', function() {
  console.log("works");
   triviaquestions();
 });

function triviaquestions() {
     var randomquestions= Math.floor(Math.random(Trivia));
    console.log(randomquestions);
    $('#Questions').html('<h4>'+ randomquestions +'</h4>');
} 

});