$(".mobile-nav-top").click(function(){
  $(".mobile-nav").removeClass("navActive")
})

$(".closeNavIcon").click(function(){
  $(".mobile-nav").addClass("navActive")
})
$(".accord-item a").click(function(){
  $(this).next().stop().slideToggle(800)
})
