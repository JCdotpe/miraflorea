$(".select2").select2();
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


var midata;
var mitb;



function vset(row, title){

  $("#otitulo").text(title);
  $("#cuerpo").removeClass('hide');
$("#tablacuerpo > tbody > tr").remove();
  // var fila2 = '<tr>';

  for (var i = mitb.length - 1; i >= 0; i--) {
  var fila1 = '<tr>';

      fila1 += '<td>' + mitb[i] + '</td>';
  // };
  //     fila1 += '</tr>';
  //  $('#tablacuerpo > tbody:last').append(fila1);

  // for (var i = row.length - 1; i >= 0; i--) {
      fila1 += '<td>' + row[i] + '</td>';
  // };

    fila1 += '</tr>';
   $('#tablacuerpo > tbody:last').append(fila1);

    };

  /*var disqus_shortname = 'sitiomirafloresopendata';
  var disqus_identifier = row;

    $.getScript ("http://" + disqus_shortname + ".disqus.com/count.js");*/



  // var fila1 = '<tr>';
  // var fila2 = '<tr>';

  // for (var i = mitb.length - 1; i >= 0; i--) {

  //     fila1 += '<td>' + mitb[i] + '</td>';
  // };
  //     fila1 += '</tr>';
  //  $('#tablacuerpo > tbody:last').append(fila1);

  // for (var i = row.length - 1; i >= 0; i--) {
  //     fila2 += '<td>' + row[i] + '</td>';
  // };

  //   fila2 += '</tr>';
  //  $('#tablacuerpo > tbody:last').append(fila2);

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
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/GESTO?auth_key=' + apik;
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
            url = 'http://miraflores.cloudapi.junar.com/datastreams/invoke/GESTO?auth_key=' + apik;
             url = 'http://localhost/miraflorea/assets/json/GESTO.json';
            break;
    }

    $.ajax({
        url: url,
        type:'GET',
        // data:form_data,
        dataType:'json',
        success:function(json_data){
          $("#obrades").empty();
          // console.log(json_data.result);
          var select = $("#obrades");
          var jj = json_data.result;
          var items = [];
            // $.each(json_data.result, function() {

          if(pre!='-1'){
          switch(pre) {
              case '1':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][5];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '2':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][3];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '3':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][1];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '4':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][1];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '5':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][2];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '6':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][3];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              case '7':
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][2];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
              default:
                  $.each(json_data.result, function(k,j) {
                    // console.log(k);
                    if(k!=0){
                      var asd = json_data.result[k][5];
                      items.push('<li class="header"><a href="#" class="obralink" data-id="' + k + '">' + asd + '</a></li>');
                    }

                  });
                  select.html(items.join(''));
                  break;
             }
        midata = json_data.result;
        mitb = json_data.result[0]
        }
        //-1

        }





    });


$(document).on("click",'.obralink',function(e) {
    // $(".obralink" ).click(function() {
      var idx = $(this).data('id');
      var row = midata[idx];


    /* * * CONFIGURATION VARIABLES * * */
    /*var disqus_shortname = 'sitiomirafloresopendata';
    var disqus_identifier = $("#tipobra").val()+idx;

    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();*/








      var title = $(this).text();
       vset(row,title);

       var disqus_shortname = 'sitiomirafloresopendata';
    var disqus_identifier = $("#tipobra").val()+idx;
    console.log(disqus_identifier);

    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
       e.preventDefault();
      // alert( row[1] );
    });



});




// E-mail validation
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
};




});