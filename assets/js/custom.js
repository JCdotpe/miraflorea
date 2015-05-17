/********************************** 
   Author: Symbiotic-Themes
   Theme: Chappi (App Landingpage)
   Version: 1.0.1   
**********************************/
function postular(){
    var form_data = {
        email: $("#unemail").val(),
        linkedin: $("#unlin").val(),
        cel: $("#uncel").val(),
        proyecto1: $("#proyecto1").val(),
        proyecto2: $("#proyecto2").val(),
        ajax:1
    };
       $('#postular').attr('disabled','disabled');
    $.ajax({
        url: CI.base_url + "ajax/postulante_ajax/save/",
        type:'POST',
        data:form_data,
        dataType:'json',
        success:function(json_data){
          if(json_data.flag == 1){
            $( '#postulante_form' ).each(function(){
              this.reset();
            });  
            $(".postulante-message").html('<i class="fa fa-check"></i>' + json_data.msg).css("color","#29b94f");
          }else{
             $(".postulante-message").html('<i class="fa fa-warning"></i>' + json_data.msg).css("color","#ef4b4b");
          }
        

         $('#postular').removeAttr('disabled');

        }
    });   



}


      // Preloader Website
      $(window).load(function() { 
         $('#loader-wrapper').delay(450).fadeOut(); 
         $('#loader').delay(750).fadeOut('slow');
      });

$(document).ready(function() {     
      $(window).keydown(function(event){
      if(event.keyCode == 13) {
          event.preventDefault();
          return false;
      }
  });


      // Sticky Navabr
      $("header").before($(".top-bar").clone().addClass("slidedown"));
      $(window).on("scroll", function () {
         $("body").toggleClass("slide-menu", ($(window).scrollTop() > 600));
      });
      
      
      //--------------------------------------------

      
      // One Page Navigation	   
	    $.scrollIt({	   
	      scrollTime: 1400,
	      easing: 'easeInOutExpo',
	      topOffset: -20,
	    });
      
      
      //--------------------------------------------
      
      
      // Phone Carousel            
      var mySwiper = $('.swiper-container').swiper({
      
         mode:'horizontal',
         loop: true,
         speed: 950,
         effect: 'coverflow',
         slidesPerView: getSlide(),
         grabCursor: true,
         nextButton: '.arrow-right',
         prevButton: '.arrow-left',
         coverflow: {
              rotate: -30,
              stretch: 10,
              depth: 120,
              modifier: 1,
              slideShadows: false
          }
         
      });   
      
      // Set number of slide based on device width
      $(window).resize(function() {
           var wW = $(window).width();
           if (wW < 601) {
               mySwiper.params.slidesPerView = 1;
           } else {
               mySwiper.params.slidesPerView = 3;
           }
           mySwiper.reInit();
      });
      
      
      //-----------------------------------------------
      
      
      // Intro Carousel
      $("#carousel").owlCarousel({
         items: 3,
         itemsDesktop: [1199,3],
         itemsDesktopSmall: [991,2],
         slideSpeed: 800,
         navigation: true,
         navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
         pagination: true,
      });
      
      // Gallery Carousel
      $("#carousel-gallery").owlCarousel({
         items: 4,
         itemsDesktop: [1199,4],
         itemsDesktopSmall: [991,3],
         itemsTablet: [768,3],
         slideSpeed: 800,
         navigation: true,
         navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
         pagination: true,
      });
      
      // Testimonials Carousel
      $("#testi-carousel").owlCarousel({
         items: 1,
         itemsDesktop: [1199,1],
         itemsDesktopSmall: [991,1],
         itemsTablet: [768,1],
         slideSpeed: 800,
         navigation: true,
         navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
         pagination: true,
         autoHeight: true,
      });
      
      //-----------------------------------------------
      
      
      // Tooltip
      $('[data-toggle="tooltip"]').tooltip()
      
      
      //-----------------------------------------------
      
      
      // Gallery 
      $('#carousel-gallery').magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery:{
          enabled:true
        }
      });
      
      
      //----------------------------------------------
      
      
      // Animation on Scroll
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         false        // act on asynchronously loaded content (default is true)
        }
      );
      wow.init();
      
      
      //----------------------------------------------
      
      
      // Parallax
      $.stellar({
         horizontalOffset: 0,
         verticalOffset: 0,
         responsive: false,
         horizontalScrolling: false,
      });     
      
      
      //----------------------------------------------
      
      
      // Mailchimp 
      $('#newsletter-form').ajaxChimp({
        callback: callbackFunction,
        url:'//twitter.us8.list-manage.com/subscribe/post?u=ae7035a7e96c2ee570fd3cfeb&amp;id=b33197c4a5'
      });

      function callbackFunction (resp) {
          console.log(resp);
          $("#mc-email").removeClass("error");
          if (resp.result === 'success') {
            $(".subscribe-message").html('<i class="fa fa-check"></i> Te enviamos un correo de verificación!.').fadeIn().css("color","#29b94f");
          }
          else{
            var msg = resp.msg.split("-")[1];
            $(".subscribe-message").html('<i class="fa fa-warning"></i> Debes ingresar un e-mail válido.').fadeIn().css("color","#ef4b4b");
            $("#mc-email").addClass("error");
          }
      }     
      
      
      //---------------------------------------------
      
      
      // Particles
      $('.particles header').particleground({
          dotColor: '#fff',
          lineColor: '#fff'
      });
      
      
      //----------------------------------------------
      
      
      // Mobile Navi Click
      $('nav a').on('click', function(){ 
       if($('.navbar-toggle').css('display') !='none'){
           $(".navbar-toggle").trigger( "click" );
       }
      });
      
      
      //----------------------------------------------
      
      
      // Scroll Up
      $('.scrollup, .logo a').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
          return false;
      });
      
      
      //----------------------------------------------      
      
      
      // Contact Form
      $("#contactform").submit(function(event) {
          
           $("#contactform").find(".input-field").removeClass("error");

           event.preventDefault();
           event.stopImmediatePropagation();

           var name = $("input#contactname").val();
           var email = $("input#contactemail").val();
           var message = $("textarea#contactmessage").val();

           if (name == "") {
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> Todos los campos son requeridos.').css("color","#ef4b4b");
               $("input#contactname").focus().addClass("error");
           } else if( email == ""){
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> Todos los campos son requeridos.').css("color","#ef4b4b");
               $("input#contactemail").focus().addClass("error");
           } else if (!isValidEmailAddress(email)) {
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> El campo E-mail no es válido.').css("color","#ef4b4b");
               $("input#contactemail").focus().addClass("error");
           } else if( message == ""){
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> Todos los campos son requeridos.').css("color","#ef4b4b");
               $("textarea#contactmessage").focus().addClass("error");
           } else {
               $.ajax({
                   type: "POST",
                   url: "assets/contact/contact.php",
                   data: {
                       'contactEmailField': email,
                       'contactNameField': name,
                       'contactMessageTextarea': message
                   },
                   success: function() {
                       $(".contact-message").html('<i class="fa fa-check"></i> Gracias por tu mensaje!').css("color","#29b94f");
                       $('input#contactname').val('');
                       $('input#contactemail').val('');
                       $('textarea#contactmessage').val('');
                   }
               });
           }
      });

       
 
//Postulante

 validatearch = $("#postulante_form").validate({
    rules: {
        unemail:{
            required: true,
            email:true,
         },
        uncel:{
            required: true,
            minlength:9,
            digits: true,
         },           
        unlin:{
            required: true,
            url: true
         },          
        proyecto1:{
            required: false,
            url: true
         },  
        proyecto2:{
            required: false,
            url: true
         },                                  
//FIN RULES
    },

    messages: {
                                        
//FIN MESSAGES
    },
    errorPlacement: function(error, element) {
        // $(element).next().after(error);
    },
    invalidHandler: function(form, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = errors == 1
          ? 'Por favor corrige estos errores:\n'
          : 'Por favor corrige los ' + errors + ' errores.\n';
        var errors = "";
        if (validator.errorList.length > 0) {
            for (x=0;x<validator.errorList.length;x++) {
                errors += "\n\u25CF " + validator.errorList[x].message;
            }
        }
        // alert(message + errors);
      }
      validator.focusInvalid();
    },
    submitHandler: function(form) {
        postular(); //submit it the form
    },     

    // use highlight and unhighlight
    highlight: function (element, errorClass, validClass) {
               $(".postulante-message").stop(true).html('<i class="fa fa-warning"></i> Los campos email, celular y linkedin URL son requeridos.').css("color","#ef4b4b");
        
    }
    // unhighlight: function (element, errorClass, validClass) {
    //     $(element).closest('div.form-group')
    //     .removeClass("has-error");
    //     $(element).siblings('.fa-times-circle').addClass("hide");;
    // }

});
     
 
});

// E-mail validation
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
}; 

// Phone Slider Function
function getSlide() {
    var wW = $(window).width();
    if (wW < 601) {
        return 1;
    }
    return 3;
}

// Logo responsive

var eventFired = 0;

if ($(window).width() > 768) {
    $("#logo-mobi a img").height('140px');
    eventFired = 1;
}
if ($(window).width() < 768) {
    $("#logo-mobi a img").height('90px');
    eventFired = 1;
}

if ($(window).width() < 350) {
    $("#logo-mobi a img").height('85px');
    eventFired = 1;
}

$(window).on('resize', function() {
//    if (!eventFired) {
        if ($(window).width() > 768) {
            $("#logo-mobi a img").height('140px');
        }
        if ($(window).width() < 768) {
            $("#logo-mobi a img").height('90px');
        } 
        if ($(window).width() < 350) {
            $("#logo-mobi a img").height('85px');
        }         
    //}









});