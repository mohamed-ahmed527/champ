import $ from "jquery";
$(document).ready(function(){

  $(".trend1 .action .action1 ").click(function(){
    $(this).find($("span:first-of-type")).css('color','#1d99ff');
  });



});
