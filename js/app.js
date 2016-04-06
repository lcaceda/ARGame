
$(document).ready(function(){

var resArray = [];
var result = [];

var scoreBox = function() {
                result = resArray.filter(function (number) {
                  return number !== '0' && number > '0';
                  });

                 $('#score').html(" " + result.length + " out of " + resArray.length);
              };

// gameBoard dialog boxes//
$( "#dialog-0" ).dialog({ autoOpen: false });
$( "#item-0" ).click(function() {
$( "#dialog-0" ).dialog( "open");

  $("#dialog-0 .submit").click(function(){

    selected0 = $("input[type=radio]:checked" ).val();
    resArray.push(selected0);
    console.log(resArray);

    $("#dialog-0").hide("drop", {direction: "down"}, "slow");
    $("#item-0").hide("drop", {direction: "down"}, "slow");
    $("#dialog-0").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-1" ).dialog({ autoOpen: false });
$( "#item-1" ).click(function() {
  $( "#dialog-1" ).dialog( "open" );
  $("#dialog-1 .submit").click(function(){

    selected1 = $("input[type=radio]:checked" ).val();
    resArray.push(selected1);
    console.log(resArray);

    $("#dialog-1").hide("drop", {direction: "down"}, "slow");
    $("#item-1").hide("drop", {direction: "down"}, "slow");
    $("#dialog-1").remove();
    console.log(resArray.length);

    scoreBox();

  });
});

$( "#dialog-2" ).dialog({ autoOpen: false });
$( "#item-2" ).click(function() {
  $( "#dialog-2" ).dialog( "open" );
  $("#dialog-2 .submit").click(function(){

    selected2 = $("input[type=radio]:checked" ).val();
    resArray.push(selected2);
    console.log(resArray);

    $("#dialog-2").hide("drop", {direction: "down"}, "slow");
    $("#item-2").hide("drop", {direction: "down"}, "slow");
    $("#dialog-2").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-3" ).dialog({ autoOpen: false });
$( "#item-3" ).click(function() {
  $( "#dialog-3" ).dialog( "open" );
  $("#dialog-3 .submit").click(function(){

    selected3 = $("input[type=radio]:checked" ).val();
    resArray.push(selected3);
    console.log(resArray);

    $("#dialog-3").hide("drop", {direction: "down"}, "slow");
    $("#item-3").hide("drop", {direction: "down"}, "slow");
    $("#dialog-3").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-4" ).dialog({ autoOpen: false });
$( "#item-4" ).click(function() {
  $( "#dialog-4" ).dialog( "open" );
  $("#dialog-4 .submit").click(function(){

    selected4 = $("input[type=radio]:checked" ).val();
    resArray.push(selected4);
    console.log(resArray);

    $("#dialog-4").hide("drop", {direction: "down"}, "slow");
    $("#item-4").hide("drop", {direction: "down"}, "slow");
    $("#dialog-4").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-5" ).dialog({ autoOpen: false });
$( "#item-5" ).click(function() {
  $( "#dialog-5" ).dialog( "open" );
  $("#dialog-5 .submit").click(function(){

    selected5 = $("input[type=radio]:checked" ).val();
    resArray.push(selected5);
    console.log(resArray);

    $("#dialog-5").hide("drop", {direction: "down"}, "slow");
    $("#item-5").hide("drop", {direction: "down"}, "slow");
    $("#dialog-5").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-6" ).dialog({ autoOpen: false });
$( "#item-6" ).click(function() {
  $( "#dialog-6" ).dialog( "open" );
  $("#dialog-6 .submit").click(function(){

    selected6 = $("input[type=radio]:checked" ).val();
    resArray.push(selected6);
    console.log(resArray);

    $("#dialog-6").hide("drop", {direction: "down"}, "slow");
    $("#item-6").hide("drop", {direction: "down"}, "slow");
    $("#dialog-6").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-7" ).dialog({ autoOpen: false });
$( "#item-7" ).click(function() {
  $( "#dialog-7" ).dialog( "open" );
  $("#dialog-7 .submit").click(function(){

    selected7 = $("input[type=radio]:checked" ).val();
    resArray.push(selected7);
    console.log(resArray);

    $("#dialog-7").hide("drop", {direction: "down"}, "slow");
    $("#item-7").hide("drop", {direction: "down"}, "slow");
    $("#dialog-7").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-8" ).dialog({ autoOpen: false });
$( "#item-8" ).click(function() {
  $( "#dialog-8" ).dialog( "open" );
  $("#dialog-8 .submit").click(function(){

    selected8 = $("input[type=radio]:checked" ).val();
    resArray.push(selected8);
    console.log(resArray);

    $("#dialog-8").hide("drop", {direction: "down"}, "slow");
    $("#item-8").hide("drop", {direction: "down"}, "slow");
    $("#dialog-8").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-9" ).dialog({ autoOpen: false });
$( "#item-9" ).click(function() {
  $( "#dialog-9" ).dialog( "open" );
  $("#dialog-9 .submit").click(function(){

    selected9 = $("input[type=radio]:checked" ).val();
    resArray.push(selected9);
    console.log(resArray);

    $("#dialog-9").hide("drop", {direction: "down"}, "slow");
    $("#item-9").hide("drop", {direction: "down"}, "slow");
    $("#dialog-9").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-10" ).dialog({ autoOpen: false });
$( "#item-10" ).click(function() {
  $( "#dialog-10" ).dialog( "open" );
  $("#dialog-10 .submit").click(function(){

    selected10 = $("input[type=radio]:checked" ).val();
    resArray.push(selected10);
    console.log(resArray);

    $("#dialog-10").hide("drop", {direction: "down"}, "slow");
    $("#item-10").hide("drop", {direction: "down"}, "slow");
    $("#dialog-10").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-11" ).dialog({ autoOpen: false });
$( "#item-11" ).click(function() {
  $( "#dialog-11" ).dialog( "open" );
  $("#dialog-11 .submit").click(function(){

    selected11 = $("input[type=radio]:checked" ).val();
    resArray.push(selected11);
    console.log(resArray);

    $("#dialog-11").hide("drop", {direction: "down"}, "slow");
    $("#item-11").hide("drop", {direction: "down"}, "slow");
    $("#dialog-11").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-12" ).dialog({ autoOpen: false });
$( "#item-12" ).click(function() {
  $( "#dialog-12" ).dialog( "open" );
  $("#dialog-12 .submit").click(function(){

    selected12 = $("input[type=radio]:checked" ).val();
    resArray.push(selected12);
    console.log(resArray);

    $("#dialog-12").hide("drop", {direction: "down"}, "slow");
    $("#item-12").hide("drop", {direction: "down"}, "slow");
    $("#dialog-12").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-13" ).dialog({ autoOpen: false });
$( "#item-13" ).click(function() {
  $( "#dialog-13" ).dialog( "open" );
  $("#dialog-13 .submit").click(function(){

    selected13 = $("input[type=radio]:checked" ).val();
    resArray.push(selected13);
    console.log(resArray);

    $("#dialog-13").hide("drop", {direction: "down"}, "slow");
    $("#item-13").hide("drop", {direction: "down"}, "slow");
    $("#dialog-13").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-14" ).dialog({ autoOpen: false });
$( "#item-14" ).click(function() {
  $( "#dialog-14" ).dialog( "open" );
  $("#dialog-14 .submit").click(function(){

    selected14 = $("input[type=radio]:checked" ).val();
    resArray.push(selected14);
    console.log(resArray);

    $("#dialog-14").hide("drop", {direction: "down"}, "slow");
    $("#item-14").hide("drop", {direction: "down"}, "slow");
    $("#dialog-14").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-15" ).dialog({ autoOpen: false });
$( "#item-15" ).click(function() {
  $( "#dialog-15" ).dialog( "open" );
  $("#dialog-15 .submit").click(function(){

    selected15 = $("input[type=radio]:checked" ).val();
    resArray.push(selected15);
    console.log(resArray);

    $("#dialog-15").hide("drop", {direction: "down"}, "slow");
    $("#item-15").hide("drop", {direction: "down"}, "slow");
    $("#dialog-15").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-16" ).dialog({ autoOpen: false });
$( "#item-16" ).click(function() {
  $( "#dialog-16" ).dialog( "open" );
  $("#dialog-16 .submit").click(function(){

    selected16 = $("input[type=radio]:checked" ).val();
    resArray.push(selected16);
    console.log(resArray);

    $("#dialog-16").hide("drop", {direction: "down"}, "slow");
    $("#item-16").hide("drop", {direction: "down"}, "slow");
    $("#dialog-16").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-17" ).dialog({ autoOpen: false });
$( "#item-17" ).click(function() {
  $( "#dialog-17" ).dialog( "open" );
  $("#dialog-17 .submit").click(function(){

    selected17 = $("input[type=radio]:checked" ).val();
    resArray.push(selected17);
    console.log(resArray);

    $("#dialog-17").hide("drop", {direction: "down"}, "slow");
    $("#item-17").hide("drop", {direction: "down"}, "slow");
    $("#dialog-17").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-18" ).dialog({ autoOpen: false });
$( "#item-18" ).click(function() {
  $( "#dialog-18" ).dialog( "open" );
  $("#dialog-18 .submit").click(function(){

    selected18 = $("input[type=radio]:checked" ).val();
    resArray.push(selected18);
    console.log(resArray);

    $("#dialog-18").hide("drop", {direction: "down"}, "slow");
    $("#item-18").hide("drop", {direction: "down"}, "slow");
    $("#dialog-18").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

$( "#dialog-19" ).dialog({ autoOpen: false });
$( "#item-19" ).click(function() {
  $( "#dialog-19" ).dialog( "open" );
  $("#dialog-19 .submit").click(function(){

    selected19 = $("input[type=radio]:checked" ).val();
    resArray.push(selected19);
    console.log(resArray);

    $("#dialog-19").hide("drop", {direction: "down"}, "slow");
    $("#item-19").hide("drop", {direction: "down"}, "slow");
    $("#dialog-19").remove();
    console.log(resArray.length);

    scoreBox();
  });
});

});// end of document.ready


///resArray push to gameResults///

