
var Modal = Modal || {};
Modal.Box = function(cn, bo, bc){
  this.list = document.getElementsByClassName(cn);
  this.bo = document.getElementsByClassName(bo);
  this.bc = document.getElementsByClassName(bc);
}
Modal.Box.prototype = {
  start : function() {
    var that = this;
    // var list = document.getElementsByClassName(this.cn);
    console.log(this.list);
    console.log('テョイス');
    // var frag = document.createDocumentFragment();
    // frag.appendChild(this.div);
    this.list[0].focus();
    this.list[0].className += ' add';

    for(var i = 0, len = this.bc.length; i < len; i++){
      this.bc[i].onclick = function() { 
        that.close();
      };
    }
    // this.btn.appendChild(document.createTextNode("close"));
    // list[0].appendChild(this.btn);
  },
  close : function() {
    this.list[0].classList.remove('add');
  }
};

window.onload = function() { 
  var mem = new Modal.Box('modal', 'btn-open', 'btn-close');
  // mem.start();
  var btnOpen = document.getElementsByClassName('btn-open');
  for(var i = 0, len = btnOpen.length; i < len; i++){
    btnOpen[i].onclick = function() { 
      mem.start();
    };
  }

}



// jQuery(document).ready(function($){
//  //move nav element position according to window width
//  moveNavigation();
//  $(window).on('resize', function(){
//    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
//  });

//  //mobile version - open/close navigation
//  $('.cd-nav-trigger').on('click', function(event){
//    event.preventDefault();
//    if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
    
//    $('header').toggleClass('nav-is-visible');
//    $('.cd-main-nav').toggleClass('nav-is-visible');
//    $('.cd-main-content').toggleClass('nav-is-visible');
//  });

//  //mobile version - go back to main navigation
//  $('.go-back').on('click', function(event){
//    event.preventDefault();
//    $('.cd-main-nav').removeClass('moves-out');
//  });

//  //open sub-navigation
//  $('.cd-subnav-trigger').on('click', function(event){
//    event.preventDefault();
//    $('.cd-main-nav').toggleClass('moves-out');
//  });

//  function moveNavigation(){
//    var navigation = $('.cd-main-nav-wrapper');
//      var screenSize = checkWindowWidth();
//         if ( screenSize ) {
//          //desktop screen - insert navigation inside header element
//      navigation.detach();
//      navigation.insertBefore('.cd-nav-trigger');
//    } else {
//      //mobile screen - insert navigation after .cd-main-content element
//      navigation.detach();
//      navigation.insertAfter('.cd-main-content');
//    }
//  }

//  function checkWindowWidth() {
//    var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
//    return ( mq == 'mobile' ) ? false : true;
//  }
// });