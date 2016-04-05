$(document).ready(function(){
// attempt to close dialog boxes on submit
/*$('input[value='Submit']').click(function(){
    $("#dialog").hide("drop", {direction: "down"}, "slow");
  });*/


  var resArray = [];


$( "#dialog-0" ).dialog({ autoOpen: false });
$( "#item-0" ).click(function() {
  $( "#dialog-0" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    var selected = $( "#dialog-0 input[type=radio]:checked" ).val();
    resArray.push(selected);

    console.log(selected, resArray);


    // console.log($(this).attr("value"));
    $("#dialog-0").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-1" ).dialog({ autoOpen: false });
$( "#item-1" ).click(function() {
  $( "#dialog-1" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-1").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-2" ).dialog({ autoOpen: false });
$( "#item-2" ).click(function() {
  $( "#dialog-2" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-2").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-3" ).dialog({ autoOpen: false });
$( "#item-3" ).click(function() {
  $( "#dialog-3" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-3").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-4" ).dialog({ autoOpen: false });
$( "#item-4" ).click(function() {
  $( "#dialog-4" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-4").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-5" ).dialog({ autoOpen: false });
$( "#item-5" ).click(function() {
  $( "#dialog-5" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-5").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-6" ).dialog({ autoOpen: false });
$( "#item-6" ).click(function() {
  $( "#dialog-6" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
    $("#dialog-6").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-7" ).dialog({ autoOpen: false });
$( "#item-7" ).click(function() {
  $( "#dialog-7" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-7").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-8" ).dialog({ autoOpen: false });
$( "#item-8" ).click(function() {
  $( "#dialog-8" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-8").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-9" ).dialog({ autoOpen: false });
$( "#item-9" ).click(function() {
  $( "#dialog-9" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-9").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-10" ).dialog({ autoOpen: false });
$( "#item-10" ).click(function() {
  $( "#dialog-10" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-10").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-11" ).dialog({ autoOpen: false });
$( "#item-11" ).click(function() {
  $( "#dialog-11" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-11").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-12" ).dialog({ autoOpen: false });
$( "#item-12" ).click(function() {
  $( "#dialog-12" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-12").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-13" ).dialog({ autoOpen: false });
$( "#item-13" ).click(function() {
  $("#dialog-13" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-13").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-14" ).dialog({ autoOpen: false });
$( "#item-14" ).click(function() {
  $( "#dialog-14" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-14").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-15" ).dialog({ autoOpen: false });
$( "#item-15" ).click(function() {
  $( "#dialog-15" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-15").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-16" ).dialog({ autoOpen: false });
$( "#item-16" ).click(function() {
  $( "#dialog-16" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-16").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-17" ).dialog({ autoOpen: false });
$( "#item-17" ).click(function() {
  $( "#dialog-17" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-17").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-18" ).dialog({ autoOpen: false });
$( "#item-18" ).click(function() {
  $( "#dialog-18" ).dialog( "open" );
  $("Submit").click(function(){
  $("#dialog-18").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-19" ).dialog({ autoOpen: false });
$( "#item-19" ).click(function() {
  $( "#dialog-19" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-19").hide("drop", {direction: "down"}, "slow");
  });
});

$( "#dialog-20" ).dialog({ autoOpen: false });
$( "#item-20" ).click(function() {
  $( "#dialog-20" ).dialog( "open" );
  $("input[value='Submit']").click(function(){
  $("#dialog-20").hide("drop", {direction: "down"}, "slow");
  });
});


//// calling radio button input////


///////pushing radio selection values to new array////
function getRadio(frm){
    var resArray = [];
    var inputs = frm.getElementsByTagName('input');
    var nrInputs = inputs.length;
    for(var i=0; i<nrInputs; i++){
      if(inputs[i].type=='radio' && inputs[i].checked == true) resArray.push(inputs[i].value);
    }
    console.log('resArray');
    return resArray;

    };



});


/*$("input[value='radio']").each(function(){
  push($this).val();
});
/*var resArray = [];
resArray.push("input[value='1']");
console.log(resArray);*/




//SWITCH CASE//

