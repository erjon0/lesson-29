$("#btn1").click(function(){
    $(".div1").hide();
});
  
$("#btn2").click(function(){
    $(".div1").show(5000);
});

$(".div2").click(function(){
    $(this).animate({
      left: '+=250px',
      height: '+=150px',
      width: '+=150px'
    });
}); 