
$(function() {
  
  // $('.opa').addClass('active')
  $(window).load(function() {
    document.getElementById('svg-1').classList.add('active')
    document.getElementById('svg-2').classList.add('active')
    document.getElementById('svg-3').classList.add('active')
    document.getElementById('svg-4').classList.add('active')
    document.getElementById('svg-5').classList.add('active')
    document.getElementById('svg-6').classList.add('active')
    document.getElementById('svg-7').classList.add('active')
    document.getElementById('svg-8').classList.add('active')
    document.getElementById('svg-9').classList.add('active')
    setTimeout(function() {
      $('.intro').css('max-height','0');
      
      // $("html,body").animate({scrollTop:document.documentElement.clientHeight},1000);
    },1000)
    setTimeout(function(){
      $('body').css('overflow-y','unset')
      $('html').smoothWheel();
      
      AOS.init();
      
    },2000)
    setTimeout(function() {
      $('.clear.one img').css('opacity','1')
    },3000)
  })

  






  // $("html").easeScroll();
  
  // var Scrollbar = window.Scrollbar;

  // Scrollbar.init(document.querySelector('body'));


  

  enterView({
    selector: '.clear.one .main-img-box',
    enter: function(el) {
      // $('.clear.one > div').addClass('fix')
      // el.classList.add('fixed')
      // console.log("start");
      // console.log("1231232end");
    },
    exit: function(el) {
      // el.classList.add('fixed')
      // el.classList.remove('fixed')
      // console.log("@@1231232end");
    },
    progress: function(el, progress) {
      // console.log(progress);
      
      $('.section-1-1').css('transform','translate3d(0px, '+(-(progress-0.24)*1500)+'px, 0px)')
      $('.section-1-2').css('transform','translate3d(0px, '+(-(progress-0.24)*1600)+'px, 0px)')
      $('.section-1-3').css('transform','translate3d(0px, '+(-(progress-0.24)*1700)+'px, 0px)')
      $('.section-1-4').css('transform','translate3d(0px, '+(-(progress-0.24)*1800)+'px, 0px)')
      $('.section-1-5').css('transform','translate3d(0px, '+(-(progress-0.24)*1900)+'px, 0px)')
      $('.section-1-6').css('transform','translate3d(0px, '+(-(progress-0.24)*2000)+'px, 0px)')
      $('.section-1-7').css('transform','translate3d(0px, '+(-(progress-0.24)*2100)+'px, 0px)')
      

      $('.section-1-8').css('transform','translate3d(0px, '+(-(progress-0.24)*1500)+'px, 0px)')
      $('.section-1-9').css('transform','translate3d(0px, '+(-(progress-0.24)*1600)+'px, 0px)')
      $('.section-1-10').css('transform','translate3d(0px, '+(-(progress-0.24)*1700)+'px, 0px)')
      $('.section-1-11').css('transform','translate3d(0px, '+(-(progress-0.24)*1800)+'px, 0px)')
      $('.section-1-12').css('transform','translate3d(0px, '+(-(progress-0.24)*1900)+'px, 0px)')
      $('.section-1-13').css('transform','translate3d(0px, '+(-(progress-0.24)*2000)+'px, 0px)')
      $('.section-1-14').css('transform','translate3d(0px, '+(-(progress-0.24)*2100)+'px, 0px)')
      $('.section-1-15').css('transform','translate3d(0px, '+(-(progress-0.24)*2200)+'px, 0px)')
      $('.section-1-16').css('transform','translate3d(0px, '+(-(progress-0.24)*2300)+'px, 0px)')
      $('.section-1-17').css('transform','translate3d(0px, '+(-(progress-0.24)*2400)+'px, 0px)')

      $('.section-1-18').css('transform','translate3d(0px, '+(-(progress-0.24)*1700)+'px, 0px)')
      $('.section-1-19').css('transform','translate3d(0px, '+(-(progress-0.24)*1800)+'px, 0px)')
      $('.section-1-20').css('transform','translate3d(0px, '+(-(progress-0.24)*1900)+'px, 0px)')
      
      $('.clear.one .wrap-1').css('transform','translate3d(0px, '+(-(progress-0.24)*2000)+'px, 0px)')
      $('.clear.one .wrap-2').css('transform','translate3d(0px, '+(-(progress-0.24)*2100)+'px, 0px)')

      if(progress < 0.6){
        // console.log('~~~~',progress);
        
        $('.clear.one img').css('transform','translate3d('+(-progress*300)+'px, '+(-progress*0)+'px, 0px) scale('+progress*3.4+')')
      }
      
  
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
});
enterView({
  selector: '.clear.two',
  enter: function(el) {
    // el.classList.add('fixed')
    // console.log("start");
    document.getElementsByClassName('text')[0].classList.remove('fixed')
    document.getElementsByClassName('text')[0].classList.add('absol')
  },
  exit: function(el) {
    // el.classList.add('fixed')
    document.getElementsByClassName('text')[0].classList.add('fixed')
    document.getElementsByClassName('text')[0].classList.remove('absol')
    // el.classList.remove('fixed')
    // console.log("1231232en23123123d");
  },
  progress: function(el, progress) {
    
  },

  offset: 0, // enter at middle of viewport
  once: false, // trigger just once
});
  enterView({
      selector: '.section2 .text',
      enter: function(el) {
        
        // console.log("start333333333333333");
        // document.getElementsByClassName('text')[0].classList.add('fixed')
        // document.getElementsByClassName('text')[0].classList.remove('absol')
      },
      exit: function(el) {
        // el.classList.add('fixed')
        // el.classList.add('fixed')
        // el.classList.remove('fixed')
        // console.log("end");
        $('.clear.one .fix').removeClass('absol')
      },
      progress: function(el, progress) {
        // console.log(progress);
        $('.section2 .right-1').css('transform','translate3d('+(progress*600)+'px, 0px, 0px)')
        $('.section2 .right-2').css('transform','translate3d('+(progress*500)+'px, 0px, 0px)')
        $('.section2 .left-2').css('transform','translate3d('+(-progress*500)+'px, 0px, 0px)')
        $('.section2 .right-3').css('transform','translate3d('+(progress*400)+'px, 0px, 0px)')
        //         console.log('asdasdasdas')
        //         img1 = false
        //         //- style="transform-origin: 50% 100%; transform: translate3d(0px, 0px, 0px) scale(0.8499, 0.8499);"
      
        //         $('.eee img').css('transform', 'scale(' + progress + ',' + progress + ')')
      
      },

      offset: 0, // enter at middle of viewport
      once: false, // trigger just once
  });

  enterView({
    selector: '.section2 .img-box',
    enter: function(el) {
      document.getElementsByClassName('text')[0].classList.add('fixed')
      // console.log("start2");
    },
    exit: function(el) {
      // console.log("end2");
      document.getElementsByClassName('text')[0].classList.remove('fixed')
      
      // el.classList.remove('fixed')

    },
    progress: function(el, progress) {
   
    
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '.section3',
    enter: function(el) {
      document.getElementsByClassName('text')[0].classList.remove('fixed')
      document.getElementsByClassName('text')[0].classList.add('absol')
      $('.section3 img').addClass('active')
    },
    exit: function(el) {
      document.getElementsByClassName('text')[0].classList.add('fixed')
      document.getElementsByClassName('text')[0].classList.remove('absol')
      // console.log("12312321");
    },
    progress: function(el, progress) {

    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '.section4',
    enter: function(el) {
    },
    exit: function(el) {
    },
    progress: function(el, progress) {
      $('.section4 .nemo').css('transform','translate(-50%,-50%) scale('+progress*8+', '+progress*8+')')
      $('.section4 .wrap').css('font-size',progress*22+'vw')
      if(progress > 0.5 && progress < 0.9) {
        $('.section4 .wrap p').addClass('active')
      }else{
        $('.section4 .wrap p').removeClass('active')
      }
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '.section4 .cut',
    enter: function(el) {
      
      $('.section4 .wrap').addClass('fixed')
      
    },
    exit: function(el) {
      
      $('.section4 .wrap').removeClass('fixed')
    },
    progress: function(el, progress) {
      // $('.section4 .nemo').css('transform','scale('+progress*4+', '+progress*4+')')
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '.img-box',
    enter: function(el) {
    },
    exit: function(el) {
    },
    progress: function(el, progress) {
      // el.classList.add('height-0')
      el.classList.add('opacity-1')
      // el.children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+progress*60+', 0, 1)'
      
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '.section5 ul',
    enter: function(el) {
    },
    exit: function(el) {
    },
    progress: function(el, progress) {
      // console.log(progress);
      el.children[0].children[0].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+progress*350+', 0, 1)'
      el.children[1].children[0].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+progress*350+', 0, 1)'
      el.children[1].children[1].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+progress*350+', 0, 1)'

      el.children[2].children[0].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+(progress-0.5)*350+', 0, 1)'
      el.children[2].children[1].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+(progress-0.5)*350+', 0, 1)'

      el.children[3].children[0].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+(progress-0.75)*350+', 0, 1)'

      el.children[4].children[1].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+(progress-0.75)*350+', 0, 1)'
      el.children[4].children[2].children[0].style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, '+(progress-0.75)*350+', 0, 1)'
      
      
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  // enterView({
  //   selector: '.section5 .retail .retail-clear',
  //   enter: function(el) {
  //   },
  //   exit: function(el) {
  //   },
  //   progress: function(el, progress) {
  //  // console.log(progress);
  //     $('.retail img').css('transform', 'translate('+(-progress*70)+'%,'+(progress*300)+'%) scale('+(progress+1)+')')
  //   },

  //   offset: 0, // enter at middle of viewport
  //   once: false, // trigger just once
  // });

  // enterView({
  //   selector: '.section5 .retail img',
  //   enter: function(el) {
  //     // $('.section5').css('background-color','#000')
  //     // $('#container').css('background-color','#000')
  //     // console.log('%%%%%%%%%%%%%%%');
  //   },
  //   exit: function(el) {
  //     // console.log('%%%%%%%%%%%%%%%^^^^^^^^^^^^');
  //     $('.section5').css('background-color','#fff')
  //     $('#container').css('background-color','#fff')
  //   },
  //   progress: function(el, progress) {
      
      
      
  //   },

  //   offset: 0, // enter at middle of viewport
  //   once: false, // trigger just once
  // });
  enterView({
    selector: '.section6 > p',
    enter: function(el) {
      $('.section6 .swiper-container').css('right','0')
    },
    exit: function(el) {
     
     
    },
    progress: function(el, progress) {
      
      
      
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  enterView({
    selector: '#container',
    enter: function(el) {
      $('.section5').css('background-color','#000')
      $('#container').css('background-color','#000')
    },
    exit: function(el) {
      // console.log("%%%%%%%");
      $('.section5').css('background-color','#fff')
      $('#container').css('background-color','#fff')
    },
    progress: function(el, progress) {
      
      
      
    },

    offset: 0, // enter at middle of viewport
    once: false, // trigger just once
  });
  


  // .fromTo(".threes", 1, {y:"-100%"}, {y:"0%"} )
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
  .fromTo(".twos", 1, {x:"100%"}, {x:"45%"} )
  .fromTo(".threes", 1, {x:"100%"}, {x:"50%"} )
  .fromTo(".fours", 1, {x:"100%"}, {x:"62%"} )
  .fromTo(".five", 1, {x:"100%"}, {x:"78%"} )
  // .fromTo(".six", 1, {x:"100%"}, {x:"80%"} )

  var scene = new ScrollMagic.Scene({
    triggerElement: "#container",
    triggerHook: "onLeave",
    duration: "300%" //이 값이 클 수록 천천히 덮어씀
  })
  .setPin("#container")
  .setTween(wipeAnimation)
  .addTo(controller);


  var wipeAnimation2 = new TimelineMax()
  .fromTo("#container2 .slide-1", 1, {x:"100%"}, {x:"0%" ,onUpdate :function(e){
    var test = $('#container2 .slide-1').css('transform').split(',')[4]
    $('#container2 .white').css('transform','translate('+(-test)+'px,0)')
    $('#container2 .slide-1 span').css('transform','translate('+(-test)+'px,0)')
  }})
  .fromTo("#container2 .slide-2", 1, {x:"100%"}, {x:"0%"} )
  .fromTo("#container2 .slide-3", 1, {x:"100%"}, {x:"0%"} )

  var scene = new ScrollMagic.Scene({
          triggerElement: "#container2",
          triggerHook: "onLeave",
          duration: "500%" //이 값이 클 수록 천천히 덮어씀
  })
  .setPin("#container2")
  .setTween(wipeAnimation2)
  .addTo(controller);

  document.addEventListener('scroll', function() {
    var test = $('#container2 .slide-1').css('transform').split(',')[4]
    var test2 = parseFloat($('#container2 .slide-2').css('transform').split(',')[4])
    var test3 = parseFloat($('#container2 .slide-3').css('transform').split(',')[4])
    if(test < 1900 && test > 0){
      // console.log(test);
      // $('#container2 .white').css('transform','translate('+(-test)+'px,0)')
      // $('#container2 .slide-1 span').css('transform','translate('+(-test)+'px,0)')
    }
    
    if(test2 < 1900 && test2 > 0){
      // $('.slide-2 ul li').eq(0).css('transform','translate('+(test2)+'px,0)')
      $('.slide-2 ul li').eq(0).css('width',''+($(document).width()-test2*0.2)+'px')
      $('.slide-2 ul li').eq(1).css('width',''+($(document).width()-test2*0.4)+'px')
      $('.slide-2 ul li').eq(2).css('width',''+($(document).width()-test2*0.6)+'px')
      $('.slide-2 ul li').eq(3).css('width',''+($(document).width()-test2*0.8)+'px')
      $('.slide-2 ul li').eq(4).css('width',''+($(document).width()-test2*1)+'px')
      $('.slide-2 ul li').eq(5).css('width',''+($(document).width()-test2*1.2)+'px')
      $('.slide-2 ul li').eq(6).css('width',''+($(document).width()-test2*1.4)+'px')
      // $('.slide-2 ul li').eq(1).css('transform','translate('+(test2+90/100)+'px,0)')
      $('#container2 .white').css('transform','translate(-'+($(window).width()-test2)+'px,0)')
      $('#container2 .slide-1 span').css('transform','translate(-'+($(window).width()-test2)+'px,0)')
    }
    
    if(test3 < 1900 && test3 > 0) {
      
      $('.slide-2 > p .box').css('height',''+(($(document).width()-test3)/17)+'px')
      $('.slide-2 ul li:nth-child(1) .box').css('height',''+(($(document).width()-test3)/14)+'px')
      $('.slide-2 ul li:nth-child(2) .box').css('height',''+(($(document).width()-test3)/13)+'px')
      $('.slide-2 ul li:nth-child(3) .box').css('height',''+(($(document).width()-test3)/12)+'px')
      $('.slide-2 ul li:nth-child(4) .box').css('height',''+(($(document).width()-test3)/10)+'px')
      $('.slide-2 ul li:nth-child(5) .box').css('height',''+(($(document).width()-test3)/8)+'px')
      $('.slide-2 ul li:nth-child(6) .box').css('height',''+(($(document).width()-test3)/6)+'px')
      $('.slide-2 ul li:nth-child(7) .box').css('height',''+(($(document).width()-test3)/4)+'px')
      
    }
    if(test3 >= $(document).width()-100 || test3 == $(document).width()){
      
      $('.slide-2 .box').css('height','0');
    }
    
    // $('#container2 .white-2').css('transform','translate('+(-test)+'px,0)')

    // console.log(test);
  })





  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    loop:true,
  });



})

$(document).ready(function(){
  window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
      $('.top-btn').css('opacity','1');
    }else {
      $('.top-btn').css('opacity','0');
    }
  });
  $('.top-btn').on('click',function(){
    location.reload();
  })
  
    // $('html').smoothWheel();

  
    
  
})