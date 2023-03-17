
//----------------------------------------
//색상코드 , 사이즈 , 문구 변수 선언-------

    var $title = $(".banner-text");
    var $title_child = $(".banner-text > span");
    
    var $bg_color1 = "#f7f8f3";
    var $bg_color2 = "#D6D3C1";
    var $bg_color3 = "#becccf";
    var $bg_color4 = "#c2b6b6";
    var $bg_color5 = "#e4d3cb";    
    
    var $main_text1 = "NICE CLAUP";
    var $main_text2 = "K-WAY";
    var $main_text3 = "KENZO";
    var $main_text4 = "Bimba Y Lola";
    var $main_text5 = "Charlotte Tilbury";
$(function () {
    //풀페이지시 여백 생성
    $(window).resize(function () {
        if (window.innerHeight == screen.height) {
            $(".sub-tit").css("top", "-100px");
        }
        else {
           $(".sub-tit").css("top", "-40px"); 
        }
    });
    var $global_page_index;
    //------변수 선언 END ---------
    
    $(".brand-gnb ul > li").click(function () {
        $(".brand-gnb ul > li").removeClass("on");
        $(this).addClass("on");
        $this = $(this);
        $global_page_index = $(".brand-gnb ul > li.on").index() + 1;
        $(".page-mark .page-num").text("0" + $global_page_index);
        
        //index1
        if ($global_page_index == "1") {
            index_01();

        }

        //index2
        if ($global_page_index == "2") {
            index_02();

        }

        //index3
        if ($global_page_index == "3") {
            index_03();
        }

        //index4
        if ($global_page_index == "4") {
            index_04();
        }

        //index5
        if ($global_page_index == "5") {
            index_05();
        }
    });

    // 화살표 버튼
    $(".hoverbtn").click(function (e) {
        $index = $(".brand-gnb > ul > li.on").index();
        $right = $(this).hasClass("right");
        $left = $(this).hasClass("left");
        $explore = $(this).hasClass("explore");
        if ($right || $left) {
            $(".brand-gnb ul > li").removeClass("on");
        }
        
        // right 버튼 선택시
        
        if ($right && $index == 0) {
            $(".brand-gnb ul > li").eq($index + 1).addClass("on");
            index_02();
            effect();
        }
        if ($right && $index == 1) {
            $(".brand-gnb ul > li").eq($index + 1).addClass("on");
            index_03();
            effect();
        }
        if ($right && $index == 2) {
            $(".brand-gnb ul > li").eq($index + 1).addClass("on");
            index_04();
            effect();
        }
        if ($right && $index == 3) {
            $(".brand-gnb ul > li").eq($index + 1).addClass("on");
            index_05();
            effect();
        }
        if ($right && $index == 4) {
            $(".brand-gnb ul > li").eq(0).addClass("on");
            index_01();
            effect();
        }
        
        //left 버튼 선택시
         if ($left && $index == 0) {
            $(".brand-gnb ul > li").eq(4).addClass("on");
            index_05();
            effect();
        }
        if ($left && $index == 1) {
            $(".brand-gnb ul > li").eq(0).addClass("on");
            index_01();
             effect();
        }
        if ($left && $index == 2) {
            $(".brand-gnb ul > li").eq(1).addClass("on");
            index_02();
            effect();
        }
        if ($left && $index == 3) {
            $(".brand-gnb ul > li").eq(2).addClass("on");
            index_03();
             effect();
        }
        if ($left && $index == 4) {
            $(".brand-gnb ul > li").eq(3).addClass("on");
            index_04();
            effect();

        }
    });
});

//-----타이틀 애니메이션 -----------------------------------
function effect() {
       $("h3.banner-text > span").removeClass("effect-end");
        $("h3.banner-text > span").addClass("effect-start");
    setTimeout(() => {
        $("h3.banner-text > span").removeClass("effect-start");
        $("h3.banner-text > span").addClass("effect-end");
    }, 500);
}
//css 하드코딩
function index_01() {
    setTimeout(() => {
        $("h3.banner-text > span").text($main_text1);
    }, 300);
    $(".page-mark .page-num").text("01");
    $(".brand-slide > li").removeClass("main");
    $(".brand-slide > li:nth-child(1)").addClass("main");
     $(".brand-content").css("background", "#f7f8f3");
     $(".brand-slide > li:nth-child(1)").css({
         'min-width': 'calc(896 / 1920 * 100vw)',
         'max-width': '906px',
        'top': '0%',
        'left': '50%'
        });

        $(".brand-slide > li:nth-child(2)").css({
        'min-width': 'calc(180 / 1920 * 100vw)',
         'max-width': '180px',
        'top': '33%',
        'left': '85%'
        });

        $(".brand-slide > li:nth-child(3)").css({
        'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '16%',
        'left': '105%'
        });

        $(".brand-slide > li:nth-child(4)").css({
        'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '5%',
        'left': '-12%'
        });
        $(".brand-slide > li:nth-child(5)").css({
        'max-width': '220px',
       'min-width': 'calc(200 / 1920 * 100vw)',
        'top': '22%',
        'left': '13%'
        });
}

function index_02() {
    setTimeout(() => {
        $("h3.banner-text > span").text($main_text2);
    }, 300);
    $(".page-mark .page-num").text("02");
    $(".brand-content").css("background", "#D6D3C1");
    // $("h3.banner-text > span").text($main_text2);
    $(".brand-slide > li").removeClass("main");
    $(".brand-slide > li:nth-child(2)").addClass("main");
        $(".brand-slide > li:nth-child(2)").css({
        'max-width': '623px',
         'min-width': 'calc(603 / 1920 * 100vw)',
        'top': '0%',
        'left': '50%'
        });

        $(".brand-slide > li:nth-child(3)").css({
        'max-width': '280px',
         'min-width': 'calc(280 / 1920 * 100vw)',
        'top': '30%',
        'left': '80%'
        });

        $(".brand-slide > li:nth-child(4)").css({
         'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '12%',
        'left': '105%'
        });

        $(".brand-slide > li:nth-child(5)").css({
        'max-width': '411px',
         'min-width': 'calc(411 / 1920 * 100vw)',
        'top': '15%',
        'left': '-15%'
        });
        $(".brand-slide > li:nth-child(1)").css({
        'max-width': '456px',
         'min-width': 'calc(456 / 1920 * 100vw)',
        'top': '10%',
        'left': '14%'
        });
}

function index_03() {
    setTimeout(() => {
        $("h3.banner-text > span").text($main_text3);
    }, 300);
    // $("h3.banner-text > span").text($main_text3);
    $(".page-mark .page-num").text("03");
    $(".brand-content").css("background", "#becccf");
    $(".brand-slide > li").removeClass("main");
    $(".brand-slide > li:nth-child(3)").addClass("main");
    $(".brand-slide > li:nth-child(3)").css({
         'min-width': 'calc(708 / 1920 * 100vw)',
        'max-width': '708px',
        'top': '0%',
        'left': '50%'
    });

    $(".brand-slide > li:nth-child(4)").css({
        'min-width': '280px',
       'min-width': 'calc(280 / 1920 * 100vw)',
        'top': '20%',
        'left': '84%'
    });

    $(".brand-slide > li:nth-child(5)").css({
        'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '10%',
        'left': '110%'
    });

    $(".brand-slide > li:nth-child(1)").css({
       'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '21%',
        'left': '-7%'
    });
    $(".brand-slide > li:nth-child(2)").css({
        'max-width': '180px',
        'min-width': 'calc(180 / 1920 * 100vw)',
        'top': '10%',
        'left': '17%'
    });

}

function index_04() {
     setTimeout(() => {
        $("h3.banner-text > span").text($main_text4);
    }, 300);
    // $("h3.banner-text > span").text($main_text4);
    $(".page-mark .page-num").text("04");
    $(".brand-content").css("background", "#c2b6b6");
    $(".brand-slide > li").removeClass("main");
    $(".brand-slide > li:nth-child(4)").addClass("main");


    $(".brand-slide > li:nth-child(4)").css({
        'min-width': 'calc(530) / 1920 * 100vw)',
        'max-width': '530px',
        'top': '0%',
        'left': '50%'
    });

    $(".brand-slide > li:nth-child(5)").css({
        'min-width': 'calc(280 / 1920 * 100vw)',
        'max-width': '280px',
        'top': '37%',
        'left': '79%'
    });

    $(".brand-slide > li:nth-child(1)").css({
        'min-width': 'calc(643 / 1920 * 100vw)',
        'max-width': '643px',
        'top': '10%',
        'left': '110%'
    });

    $(".brand-slide > li:nth-child(2)").css({
       'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '25%',
        'left': '0%'
    });
    $(".brand-slide > li:nth-child(3)").css({
        'max-width': '180px',
        'min-width': 'calc(180 / 1920 * 100vw)',
        'top': '10%',
        'left': '23%'
    });

}

function index_05() {
     setTimeout(() => {
        $("h3.banner-text > span").text($main_text5);
    }, 300);
    // $("h3.banner-text > span").text($main_text5);
    $(".page-mark .page-num").text("05");
    $(".brand-content").css("background", "#e4d3cb");
    $(".brand-slide > li").removeClass("main");
    $(".brand-slide > li:nth-child(5)").addClass("main");

    $(".brand-slide > li:nth-child(5)").css({
        'min-width': 'calc(603/ 1920 * 100vw)',
        'max-width': '603px',
        'top': '0%',
        'left': '50%'
    });

    $(".brand-slide > li:nth-child(1)").css({
        'min-width': 'calc(280 / 1920 * 100vw)',
        'max-width': '280px',
        'top': '10%',
        'left': '81%'
    });

    $(".brand-slide > li:nth-child(2)").css({
       'min-width': 'calc(411 / 1920 * 100vw)',
        'max-width': '411px',
        'top': '25%',
        'left': '109%'
    });

    $(".brand-slide > li:nth-child(3)").css({
        'min-width': 'calc(511 / 1920 * 100vw)',
        'max-width': '511px',
        'top': '9%',
        'left': '-9%'
    });
    $(".brand-slide > li:nth-child(4)").css({
        'max-width': '280px',
        'min-width': 'calc(280 / 1920 * 100vw)',
        'top': '24%',
        'left': '19%'
    });
}

//브랜드 mousehover

$(function () {

    $("body").mousemove(function (e) {
        $wrap_w_all = $("body").width();
        $wrap_w = $("body").width() / 2;
        $wrap_h = $("body").height();
        $x = e.pageX;
        $y = e.pageY;
        $main_x = $(".brand-slide > li.main").width();
        $main_y = $(".brand-slide > li.main").height();

        console.log();
        if ($x > $wrap_w + ($main_x / 2) && $y < $wrap_h - 150 && $y > 150) {
            $(".hoverbtn").addClass("right");
            $(".arrow").addClass("right");
            // $('.hoverbtn.right').css("top", e.pageY - 160);
            // $('.hoverbtn.right').css("left", e.pageX - 120);
            if(window.innerHeight == screen.height){
                 TweenMax.to($('.hoverbtn.right'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY-240 
                }
                 });
                
            }
           else{
                 TweenMax.to($('.hoverbtn.right'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY -160
                }
                 });
                
            }
        }
        else {
            $(".hoverbtn").removeClass("right");
            $(".arrow").removeClass("right");

            
        }

        if ($x < $wrap_w - ($main_x / 2) && $y < $wrap_h - 240 && $y > 150) {
            $(".hoverbtn").addClass("left");
            $(".arrow").addClass("left");
            // $('.hoverbtn.left').css("top", e.pageY - 160);
            // $('.hoverbtn.left').css("left", e.pageX -120);
            if(window.innerHeight == screen.height){
                 TweenMax.to($('.hoverbtn.left'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY-240 
                }
                 });
                
            }
           else{
                 TweenMax.to($('.hoverbtn.left'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY -160
                }
                 });
                
            }
        }

        else {
            $(".hoverbtn").removeClass("left");
            $(".arrow").removeClass("left");
        }
        if ($x > $wrap_w - $main_x / 2 && $x < $wrap_w + $main_x / 2 && $y < $wrap_h - 150 && $y > 150) {
            $(".hoverbtn").removeClass("right");
            $(".hoverbtn").removeClass("left");
            $(".arrow").removeClass("right");
            $(".arrow").removeClass("left");
            $(".hoverbtn").addClass("explore");
            $(".hoverbtn .explore-text").css("display", "block");
            // $('.hoverbtn.explore').css("top", e.pageY - 160);
            // $('.hoverbtn.explore').css("left", e.pageX - 120);
           if(window.innerHeight == screen.height){
                 TweenMax.to($('.hoverbtn.explore'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY-240 
                }
                 });
                
            }
           else{
                 TweenMax.to($('.hoverbtn.explore'), 0.3, {
                css: {
                    left: e.pageX-120 ,
                    top: e.pageY -160
                }
                 });
                
            }
        }
        else {
             $(".hoverbtn").removeClass("explore");
            $(".hoverbtn .explore-text").css("display", "none");
        }
    });

});