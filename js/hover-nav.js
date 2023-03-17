$(function () {
    $(window).mousemove(function (e) {
        // $wrap_w_all = $("body").width();
        // $wrap_w = $("body").width() / 2;
        // $wrap_h = $("body").height();
        $x = e.clientX;
        $y = e.clientY;
        $mouse = $(".mouse-cursor");

        TweenMax.to($mouse, 0.3, {
            css: {
            left: $x,
            top: $y
            }
        });
    
        
        $("img").mouseenter(function () {
            $(".mouse-cursor").addClass("hover");
                
        });
        $("img").mouseleave(function () {
            $(".mouse-cursor").removeClass("hover");

        });
        $("header").hover(function () {
            $($mouse).hide();
                
            }, function () {
                $($mouse).show();
            }
        );
    });

});