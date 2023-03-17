$(function () {
    // 마우스 hover explore 이벤트
    $(".brand-slide li").mousemove(function (e) {
        if ($(this).hasClass("main")) {
            $(".hoverbtn").addClass("no-show");
            $(".explore").removeClass("no-show");
            $(".explore").css("left", e.pageX-100);
            $('.explore').css("top", e.pageY-220);
        }
    });
    $('.sub-tit').mouseover(function (e) {
        e.stopPropagation();
        $(".explore").addClass("no-show");
        
    });
     $('.brand-gnb').mouseover(function (e) {
         $(".explore").addClass("no-show");
    });
    $(".brand-slide li").mouseleave(function () {
        $(".hoverbtn").removeClass("no-show");
    });



    //==========================================
    var $wrap_w = $("body").width() / 2;
    var $wrap_h = $("body").height();
    $(document).mousemove(function (e) {
        $x = e.pageX;
        $y = e.pageY;
        if ($x > $wrap_w + 500 && $y < $wrap_h - 150 && $y > 200) {
            $(".explore").addClass("no-show");
            $(".hoverbtn").addClass("right");
            $(".arrow").addClass("right");
            $('.hoverbtn.right').css("top", e.pageY - 220);
            $('.hoverbtn.right').css("left", e.pageX - 100);
        }
        else {
            $(".hoverbtn").removeClass("right");
            $(".arrow").removeClass("right");
            
        }

        if ($x < $wrap_w - 500 && $y < $wrap_h - 300 && $y > 200) {
            $(".explore").addClass("no-show");
            $(".hoverbtn").addClass("left");
            $(".arrow").addClass("left");
            $('.hoverbtn.left').css("top", e.pageY - 220);
            $('.hoverbtn.left').css("left", e.pageX - 100);
        }
        else {
            $(".hoverbtn").removeClass("left");
            $(".arrow").removeClass("left");
        }
    });

});