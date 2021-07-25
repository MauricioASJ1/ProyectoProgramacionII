
$(document).ready(function() {
  $('.conte-2-ref>.icono2').hover(function() {
    $(this).addClass('transition2');
}, function() {
    $(this).removeClass('transition2');
});
  $('.container-icon .icon-t img').hover(function() {
    $(this).addClass('transition');
}, function() {
    $(this).removeClass('transition');
});
$('a>i').hover(function() {
  $(this).addClass('transition2');
}, function() {
  $(this).removeClass('transition2');
});
  $('.cara').addClass('cl-1-c');
  $('.cara[id="uno"]').addClass('cl-1-c-d');
  $('.cara[id="tres"]').addClass('cl-1-c-d');
  $('.cara[id="cinco"]').addClass('cl-1-c-d');
  $('.cara[id="seis"]').addClass('cl-1-c-d');
  $('.c-des').addClass('c-d-1');
  $('.all').addClass('cl-1-b');
  var ind=0,n=0;
  var catee=['DISEÑO','DESARROLLO','MARKETING'];
  var interval=setInterval(aut,8000);
  var timeout;
  function aut(){
    if(ind<2){
      ind++;
    }else{
      ind=0;
    }
    Animacion();
  }
    $('.category-item').hide();
    $('.category-item:first').show();
   $('.left').click(function(){
    
     if(ind>=1){
       ind--;
     }else{
       ind=2;
     }
     Detener();
     Animacion();
   });
   $('.right').click(function(){
     
    if(ind<2){
      ind++;
    }else{
      ind=0;
    }
    Detener();
    Animacion();
  });
   function Animacion(){
    $('.category-item').css('transform','scale(0)');
     function hideC() {
       
      $('.category-item').hide();
    } setTimeout(hideC,500);
     
     function showC() {
      $('.category-item[category="'+catee[ind]+'"]').show();
      $('.category-item[category="'+catee[ind]+'"]').css('transform','scale(1)');
     }setTimeout(showC,500);
     function cambiarR(){
       switch(ind){
         case 0:{
          $('.cubo').removeClass('girar');
          $('.cubo').removeClass('girarX');
          $('.cubo').addClass('girarY');
          $('.all').removeClass('cl-3-b');
          $('.cara').removeClass('cl-2-c');
          $('.all').removeClass('cl-2-b');
          $('.cara[id="uno"]').removeClass('cl-2-c-d');
          $('.cara[id="tres"]').removeClass('cl-2-c-d');
          $('.cara[id="cinco"]').removeClass('cl-2-c-d');
          $('.cara[id="seis"]').removeClass('cl-2-c-d');
          $('.cara').addClass('cl-1-c');
        $('.cara[id="uno"]').addClass('cl-1-c-d');
        $('.cara[id="tres"]').addClass('cl-1-c-d');
        $('.cara[id="cinco"]').addClass('cl-1-c-d');
        $('.cara[id="seis"]').addClass('cl-1-c-d');
        $('.c-des').removeClass('c-d-2');
          $('.c-des').removeClass('c-d-3');
          $('.c-des').addClass('c-d-1');
          $('.all').addClass('cl-1-b');
          break;
         }
         case 1:{
          $('.cubo').removeClass('girar');
          $('.cubo').removeClass('girarY');
          $('.cubo').addClass('girarX');
          $('.cara').addClass('cl-2-c');
          $('.all').removeClass('cl-1-b');
          $('.cara[id="uno"]').removeClass('cl-1-c-d');
          $('.cara[id="tres"]').removeClass('cl-1-c-d');
          $('.cara[id="cinco"]').removeClass('cl-1-c-d');
          $('.cara[id="seis"]').removeClass('cl-1-c-d');
          
          $('.cara').removeClass('cl-2-c');
          $('.cara[id="uno"]').removeClass('cl-2-c-d');
          $('.cara[id="tres"]').removeClass('cl-2-c-d');
          $('.cara[id="cinco"]').removeClass('cl-2-c-d');
          $('.cara[id="seis"]').removeClass('cl-2-c-d');
          $('.all').addClass('cl-3-b');
          $('.cara').addClass('cl-2-c');
          $('.cara[id="uno"]').addClass('cl-2-c-d');
          $('.cara[id="tres"]').addClass('cl-2-c-d');
          $('.cara[id="cinco"]').addClass('cl-2-c-d');
          $('.cara[id="seis"]').addClass('cl-2-c-d');
          $('.c-des').removeClass('c-d-1');
          $('.c-des').removeClass('c-d-3');
          $('.c-des').addClass('c-d-2');
           $('.all').addClass('cl-2-b');
           $('.all').removeClass('cl-3-b');
          break;
         }
         case 2:{
          $('.cubo').removeClass('girarX');
          $('.cubo').removeClass('girarY');
          $('.cubo').addClass('girar');
          $('.cara').removeClass('cl-1-c');
          $('.cara[id="uno"]').removeClass('cl-1-c-d');
          $('.cara[id="tres"]').removeClass('cl-1-c-d');
          $('.cara[id="cinco"]').removeClass('cl-1-c-d');
          $('.cara[id="seis"]').removeClass('cl-1-c-d');
          $('.all').removeClass('cl-2-b');
          $('.all').removeClass('cl-1-b');
          $('.cara').removeClass('cl-2-c');
          $('.cara[id="uno"]').removeClass('cl-2-c-d');
          $('.cara[id="tres"]').removeClass('cl-2-c-d');
          $('.cara[id="cinco"]').removeClass('cl-2-c-d');
          $('.cara[id="seis"]').removeClass('cl-2-c-d');
          $('.cara').addClass('cl-2-c');
          $('.cara[id="uno"]').addClass('cl-2-c-d');
          $('.cara[id="tres"]').addClass('cl-2-c-d');
          $('.cara[id="cinco"]').addClass('cl-2-c-d');
          $('.cara[id="seis"]').addClass('cl-2-c-d');
          $('.all').addClass('cl-3-b');
          $('.c-des').removeClass('c-d-1');
          $('.c-des').removeClass('c-d-2');
          $('.c-des').addClass('c-d-3');
          break;
         }
       }
      
     }setTimeout(cambiarR,600);
   }; 
   function Detener(){
    clearInterval(interval);
    clearTimeout(timeout);
    timeout=setTimeout(Reanudar,8000);
 
  }
   function Reanudar(){
    interval=setInterval(aut,8000);
    
  }
 
  
   
   
});