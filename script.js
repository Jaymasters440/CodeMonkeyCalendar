// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var day = dayjs();
$("#currentDay").text(day.format("DD MMM YYYY")+"   "+day.format("HH:mmA"));
$(function () {
 var currentHour= dayjs().hour();
  $( ".description" ).each(function() {
   var hour=parseInt(this.dataset.hour)
   if(currentHour===hour){
    $( this ).addClass( "present" );
   }else if(currentHour > hour){
    $( this ).addClass( "past" );
   }else if(currentHour < hour){
    $( this ).addClass( "future" );
   }
    
  });
  
  
  $(".btn").each(function(){
   $(this).click(function(){
   
    localStorage.setItem($(this).parent().attr('id'),$(this).prev().val());
   })
  })

  // Set localStorage item
  for(var i=9;i<18;i++){
    var temp = 'hour-'+ i;
    console.log(temp);
    $("#"+temp).find("textarea").val(
      localStorage.getItem(temp));

  }

});
