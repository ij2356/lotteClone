//공통 js - sbkim 추가
$(function(){
    
    //open menu
    $('#menu').on('change',function(){
        if($(this).is(':checked')) {
         $('.header').addClass('open');
        }else {
         $('.header').removeClass('open');
        }
     });


    if(navigator.platform == 'MacIntel') {
        $('body').addClass('mac');
    } else {
        $('body').addClass('window');
    }
});