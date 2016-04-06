
$(document).ready(function(){
var results = document.getElementsByClassName('dialog');
var arr = jQuery.makeArray(results);
arr.reverse();
$(arr).appendTo(document.body);
console.log(results);

// gameBoard dialog boxes//
$( "#dialog-0" ).dialog({ autoOpen: false });
$( "#item-0" ).click(function() {
  $( "#dialog-0" ).dialog( "open");
  $("input[value='Submit']").click(function(){
    selected = $('input[type=radio]:checked').each(function() {
    console.log($(this).val(), $(this).attr('value'));
    arr.push(this);
});
    /*selected = $("input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-0").hide("drop", {direction: "down"}, "slow");
    $("#item-0").hide("drop", {direction: "down"}, "slow");
    $("#dialog-0").remove();
  });

});

$( "#dialog-1" ).dialog({ autoOpen: false });
$( "#item-1" ).click(function() {
  $( "#dialog-1" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    selected = $('input[type=radio]:checked').each(function() {
    console.log($(this).val(), $(this).attr('value'));
    arr.push(this);
   });
    /*selected = $("input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-1").hide("drop", {direction: "down"}, "slow");
    $("#item-1").hide("drop", {direction: "down"}, "slow");
    $("#dialog-1").remove();
  });
});

$( "#dialog-2" ).dialog({ autoOpen: false });
$( "#item-2" ).click(function() {
  $( "#dialog-2" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    selected = $('input[type=radio]:checked').each(function() {
    console.log($(this).val(), $(this).attr('value'));
    arr.push(this);
   });
    /*var selected = $( "input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-2").hide("drop", {direction: "down"}, "slow");
    $("#item-2").hide("drop", {direction: "down"}, "slow");
    $("#dialog-2").remove();
  });
});

$( "#dialog-3" ).dialog({ autoOpen: false });
$( "#item-3" ).click(function() {
  $( "#dialog-3" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    selected = $('input[type=radio]:checked').each(function() {
    console.log($(this).val(), $(this).attr('value'));
    arr.push(this);
   });
    /*var selected = $( "input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-3").hide("drop", {direction: "down"}, "slow");
    $("#item-3").hide("drop", {direction: "down"}, "slow");
    $("#dialog-3").remove();
  });
});

$( "#dialog-4" ).dialog({ autoOpen: false });
$( "#item-4" ).click(function() {
  $( "#dialog-4" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    /*var selected = $( "input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-4").hide("drop", {direction: "down"}, "slow");
    $("#item-4").hide("drop", {direction: "down"}, "slow");
    $("#dialog-4").remove();
  });
});

$( "#dialog-5" ).dialog({ autoOpen: false });
$( "#item-5" ).click(function() {
  $( "#dialog-5" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    /*var selected = $("input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-5").hide("drop", {direction: "down"}, "slow");
    $("#item-5").hide("drop", {direction: "down"}, "slow");
    $("#dialog-5").remove();
  });
});

$( "#dialog-6" ).dialog({ autoOpen: false });
$( "#item-6" ).click(function() {
  $( "#dialog-6" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    /*var selected = $( "#dialog-6 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
    $("#dialog-6").hide("drop", {direction: "down"}, "slow");
    $("#item-6").hide("drop", {direction: "down"}, "slow");
    $("dialog-6").remove();
  });
});

$( "#dialog-7" ).dialog({ autoOpen: false });
$( "#item-7" ).click(function() {
  $( "#dialog-7" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-7 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-7").hide("drop", {direction: "down"}, "slow");
  $("#item-7").hide("drop", {direction: "down"}, "slow");
  $("#dialog-7").remove();
  });
});

$( "#dialog-8" ).dialog({ autoOpen: false });
$( "#item-8" ).click(function() {
  $( "#dialog-8" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-8 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-8").hide("drop", {direction: "down"}, "slow");
  $("#item-8").hide("drop", {direction: "down"}, "slow");
  $("#dialog-8").remove();
  });
});

$( "#dialog-9" ).dialog({ autoOpen: false });
$( "#item-9" ).click(function() {
  $( "#dialog-9" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-9 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-9").hide("drop", {direction: "down"}, "slow");
  $("#item-9").hide("drop", {direction: "down"}, "slow");
  $("#dialog-9").remove();
  });
});

$( "#dialog-10" ).dialog({ autoOpen: false });
$( "#item-10" ).click(function() {
  $( "#dialog-10" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-10 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-10").hide("drop", {direction: "down"}, "slow");
  $("#item-10").hide("drop", {direction: "down"}, "slow");
  $("#dialog-10").remove();
  });
});

$( "#dialog-11" ).dialog({ autoOpen: false });
$( "#item-11" ).click(function() {
  $( "#dialog-11" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
     var selected = $( "#dialog-11 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-11").hide("drop", {direction: "down"}, "slow");
  $("#item-11").hide("drop", {direction: "down"}, "slow");
  $("#dialog-11").remove();
  });
});

$( "#dialog-12" ).dialog({ autoOpen: false });
$( "#item-12" ).click(function() {
  $( "#dialog-12" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
     var selected = $( "#dialog-12 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-12").hide("drop", {direction: "down"}, "slow");
  $("#item-12").hide("drop", {direction: "down"}, "slow");
  $("#dialog-12").remove();
  });
});

$( "#dialog-13" ).dialog({ autoOpen: false });
$( "#item-13" ).click(function() {
  $("#dialog-13" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
     var selected = $( "#dialog-13 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-13").hide("drop", {direction: "down"}, "slow");
  $("#item-13").hide("drop", {direction: "down"}, "slow");
  $("#dialog-13").remove();
  });
});

$( "#dialog-14" ).dialog({ autoOpen: false });
$( "#item-14" ).click(function() {
  $( "#dialog-14" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-14 input[type=radio]:checked" ).val();
    resArray.push(selected);
   // console.log(selected, resArray);
  $("#dialog-14").hide("drop", {direction: "down"}, "slow");
  $("#item-14").hide("drop", {direction: "down"}, "slow");
  $("#dialog-14").remove();
  });
});

$( "#dialog-15" ).dialog({ autoOpen: false });
$( "#item-15" ).click(function() {
  $( "#dialog-15" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-15 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-15").hide("drop", {direction: "down"}, "slow");
  $("#item-15").hide("drop", {direction: "down"}, "slow");
  $("#dialog-15").remove();
  });
});

$( "#dialog-16" ).dialog({ autoOpen: false });
$( "#item-16" ).click(function() {
  $( "#dialog-16" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-16 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-16").hide("drop", {direction: "down"}, "slow");
  $("#item-16").hide("drop", {direction: "down"}, "slow");
  $("#dialog-16").remove();
  });
});

$( "#dialog-17" ).dialog({ autoOpen: false });
$( "#item-17" ).click(function() {
  $( "#dialog-17" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-17 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-17").hide("drop", {direction: "down"}, "slow");
  $("#item-17").hide("drop", {direction: "down"}, "slow");
  $("#dialog-17").remove();
  });
});

$( "#dialog-18" ).dialog({ autoOpen: false });
$( "#item-18" ).click(function() {
  $( "#dialog-18" ).dialog( "open" );
  $("Submit").click(function(){
    var selected = $( "#dialog-18 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-18").hide("drop", {direction: "down"}, "slow");
  $("#item-18").hide("drop", {direction: "down"}, "slow");
  $("#dialog-18").remove();
  });
});

$( "#dialog-19" ).dialog({ autoOpen: false });
$( "#item-19" ).click(function() {
  $( "#dialog-19" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $("#dialog-19 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);
  $("#dialog-19").hide("drop", {direction: "down"}, "slow");
  $("#item-19").hide("drop", {direction: "down"}, "slow");
  $("#dialog-19").remove();
  });
});

$( "#dialog-20" ).dialog({ autoOpen: false });
$( "#item-20" ).click(function() {
  $( "#dialog-20" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    /*var selected = $("#dialog-20 input[type=radio]:checked" ).val();
    resArray.push(selected);
    console.log(selected, resArray);*/
  $("#dialog-20").hide("drop", {direction: "down"}, "slow");
  $("#item-20").hide("drop", {direction: "down"}, "slow");
  $("#dialog-20").remove();
  });
});






///resArray push to gameResults///
});



