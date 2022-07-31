

// scroll top animation
 $('.scroll-top').click(function(){
        $('html,body').animate({
            scrollTop: 0,
            
        }, 3000 ,'linear');
      });
  // scroll top show hide
  $(window).scroll(function(){
    if($(this).scrollTop() > 1000){
      $('.scroll-top').fadeIn();
    }else{
      $('.scroll-top').fadeOut();
    }
  });

  $('.micon').click(function(){
    $('.menu-bar').animate({
      top: 0,
    },1000);
    $('.micon').hide();
  });
  
  $('.close').click(function(){
    $('.menu-bar').animate({
      top: "-50px",
    },1000);
    $('.micon').show();
  });
  

const slideOutPanel = $('#slide-out-panel').SlideOutPanel({
    
          // settings here

          //slideFrom:'left' // or 'right', 'top', 'bottom' //default right
          
          //bodyPush:true,
          //breakpoint:'768px', // disable bodyPush on mobile
         
          //enableEscapeKey:true,  //allow ESC key to close the drawer. Default: false.
          
          //closeBtn:'<i class="fas fa-times"></i>',  //Customize the close button.
          //closeBtnSize:'14px',
          
          //screenClose:true,  // Customize the background overlay when the drawer is opened.
          //screenOpacity:'0.5',
         // screenZindex:'9998',
          //showScreen:true,
          
          //offsetTop: 0,   //Set the distance from the top of the page. Default: 0.
         
         // width:'300px',  //Customize the width of the drawer. Default: '350px'.
         
         //transition:'ease',  //Config the open/close transitions.
         // transitionDuration:'0.35s',
    });
    $('body').on('click', '.drawer', () => {
        slideOutPanel.toggle();
      });