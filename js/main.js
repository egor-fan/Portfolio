/*PRELOADER*/
var hellopreloader = document.getElementById("hellopreloader_preload"); function fadeOutnojquery(el) { el.style.opacity = 1; var interhellopreloader = setInterval(function () { el.style.opacity = el.style.opacity - 0.05; if (el.style.opacity <= 0.05) { clearInterval(interhellopreloader); hellopreloader.style.display = "none"; } }, 16); } window.onload = function () { setTimeout(function () { fadeOutnojquery(hellopreloader); }, 0); }
/*PRELOADER*/



/*BLACK THEME*/
$(function(){

  $(".head_inner nav ul li.switch a").on("click", function(e){
    $("body").toggleClass("switchMode");
    $("ul li:last-child").toggleClass("switchBlack")
    e.preventDefault();
  });

});
/*BLACK THEME*/


/*BURGER MENU*/
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock')
    
  })
})

$(document).ready(function(){
  $('.header__list').click(function(event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  })
})
/*BURGER MENU*/


/*INPUT TEL-NUMBER*/
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+375(00)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);
/*INPUT TEL-NUMBER*/

/*BLACK THEME*/
$(function(){

  $(".btn-yet").on("click", function(e){
    $(".img-yet").toggleClass("active-yet");
    e.preventDefault();
  });

});
/*BLACK THEME*/


$(function(){

  $('.btn-yet').click(function(){
    if (!$(this).data('status')) {
      $(this).html('Скрыть');
      $(this).data('status', true);
    }
    else {
      $(this).html('Показать еще');
      $(this).data('status', false);
    }
});
});
