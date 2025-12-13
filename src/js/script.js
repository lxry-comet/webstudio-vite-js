import "../scss/main.scss";
$(document).ready(function(){
    $('.header__burger-menu').click(function(event){
        $('.header__burger-menu,.header__nav-list').toggleClass('active');
    });
});