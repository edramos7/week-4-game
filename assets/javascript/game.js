var challengeNumber = "";
challengeNumber = Math.floor((Math.random() * 50) + 1);

var resultado = "#score";
var total = 0;


$(document).ready(function() {


    $("#points").text(challengeNumber);
});

var rdmNumber1;
rdmNumber1 = Math.floor((Math.random() * 10) + 1);

var rdmNumber2;
rdmNumber2 = Math.floor((Math.random() * 10) + 1);

var rdmNumber3;
rdmNumber3 = Math.floor((Math.random() * 10) + 1);

var rdmNumber4;
rdmNumber4 = Math.floor((Math.random() * 10) + 1);

//$("#points").load(function(){
// newDiv.text(challengeNumber);
//}

var total = 0;
var win = 0;
var los = 0;

$("#pic1").click(function() {
    total = rdmNumber1 + total;

    $("#score").html(total);

    if (total == challengeNumber) {
        win = win + 1;
        $("#win").html(win);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);

    }

    if (total > challengeNumber) {
        los = los + 1;
        $("#los").html(los);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }

});

$("#pic2").click(function() {
    total = rdmNumber2 + total;

    $("#score").html(total);
    if (total == challengeNumber) {
        win = win + 1;
        $("#win").html(win);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }

    if (total > challengeNumber) {
        los = los + 1;
        $("#los").html(los);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }

});

$("#pic3").click(function() {
    total = rdmNumber3 + total;

    $("#score").html(total);
    if (total == challengeNumber) {
        win = win + 1;
        $("#win").html(win);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }

    if (total > challengeNumber) {
        los = los + 1;
        $("#los").html(los);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }
});
$("#pic4").click(function() {
    total = rdmNumber4 + total;

    $("#score").html(total);
    if (total == challengeNumber) {
        win = win + 1;
        $("#win").html(win);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }

    if (total > challengeNumber) {
        los = los + 1;
        $("#los").html(los);
        total = 0;
        $("#score").html(total);
        challengeNumber = Math.floor((Math.random() * 50) + 1);
        $("#points").html(challengeNumber);
    }
});





// Added score

//$(".number").on("click", function () {

//if(opfirst) {

//var value = this.value;

//wholenum = wholenum + this.value;

//$("#first-number").html(wholenum); 

// };

// $('.rocks').on('click', function(){
//   counter = counter + parseInt($(this).data('num'));

//   $('#yourNumber').text(counter);

//   var wins = 0;
//   var losses = 0;

//   if (counter == numberToGuess){
//     wins++;
//   }else if( counter > numberToGuess){
//     losses++;




// if(opclick == "plus") {

//     $("#result").html(parseInt(wholenum) + parseInt(secwholenum));
