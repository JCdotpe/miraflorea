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


$(function(){


      $(window).keydown(function(event){
      if(event.keyCode == 13) {
          event.preventDefault();
          return false;
      }
  });
       
 

//val car_n
$( "#tipobra" ).change(function() {
    var pre = $(this).val();
    var url;
    var apik = '10d6d50b287010c0bcaad0b0798b05314a13eafa';
    switch(pre) {
        case '1':
            // url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/GESTO?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/GESTO.json';
            break;
        case '2':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/LUMIN?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/LUMIN.json';
            break;
        case '3':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/MANTE-INTEG-DE-VIAS?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/MANTE-INTEG-DE-VIAS.json';
            break;
        case '4':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/MANTE-PARCI-DE-VIAS?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/MANTE-PARCI-DE-VIAS.json';
            break;
        case '5':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/PROYE-POR-MANTE?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/PROYE-POR-MANTE.json';
            break;
        case '6':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/RAMPA?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/RAMPA.json';
            break;  
        case '7':
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/SENAL?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/SENAL.json';
            break;                                                             
        default:
             url = 'http://localhost/miraflorea/assets/json/GESTO.json';
            // url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/GESTO?auth_key=' + apik;
            break;
    }

    $.ajax({
        url: url,
        type:'GET',
        // data:form_data,
        dataType:'json',
        success:function(json_data){
          // console.log(json_data.result);
          var select = $("#obrades");
          var jj = json_data.result;
          var items = [];
            // $.each(json_data.result, function() {
          switch(pre) {
              case '1':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][5];
                      items.push('<li class="header">' + asd + '</li>');
                    }

                  });  
                  select.html(items.join(''));                         
                  break;
              case '2':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][3];
                      items.push('<li class="header">' + asd + '</li>');
                    }

                  });  
                  select.html(items.join(''));    
                  break;
              case '3':
                  url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/MANTE-INTEG-DE-VIAS?auth_key=' + apik;
                   url = 'http://localhost/miraflorea/assets/json/MANTE-INTEG-DE-VIAS.json';
                  break;
              case '4':
                  url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/MANTE-PARCI-DE-VIAS?auth_key=' + apik;
                   url = 'http://localhost/miraflorea/assets/json/MANTE-PARCI-DE-VIAS.json';
                  break;
              case '5':
                  url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/PROYE-POR-MANTE?auth_key=' + apik;
                   url = 'http://localhost/miraflorea/assets/json/PROYE-POR-MANTE.json';
                  break;
              case '6':
                  url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/RAMPA?auth_key=' + apik;
                   url = 'http://localhost/miraflorea/assets/json/RAMPA.json';
                  break;  
              case '7':
                  url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/SENAL?auth_key=' + apik;
                   url = 'http://localhost/miraflorea/assets/json/SENAL.json';
                  break;                                                             
              default:
                   url = 'http://localhost/miraflorea/assets/json/GESTO.json';
                  // url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/GESTO?auth_key=' + apik;
                  break;
          }            


        
        }





    });  

});


// E-mail validation
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
}; 




});