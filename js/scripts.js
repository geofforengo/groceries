$(document).ready(function(){

  $("form#groceries").submit(function(event) {

    $("#shopList").hide();

    event.preventDefault();





var item1=$("#item1").val();
var item2=$("#item2").val();
var item3=$("#item3").val();
var item4=$("#item4").val();
var item5=$("#item5").val();
var item6=$("#item6").val();

var items=[ item1, item2, item3, item4, item5, item6]

items.sort();

console.log(items);

var itemsUpper =items.map(function(item){
  return item.toUpperCase();
});

console.log(itemsUpper);

var listItem0=itemsUpper[0];
var listItem1=itemsUpper[1];
var listItem2=itemsUpper[2];
var listItem3=itemsUpper[3];
var listItem4=itemsUpper[4];
var listItem5=itemsUpper[5];


$("#li1").text(listItem0);
$("#li2").text(listItem1);
$("#li3").text(listItem2);
$("#li4").text(listItem3);
$("#li5").text(listItem4);
$("#li6").text(listItem5);





});

});
