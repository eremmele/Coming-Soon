/*$(document).ready(
    function() {
        $j("#about").on('click mouseover', function() {
            $j("#aboutinfo").toggle();
            $j("#processinfo").hide();
        });
        $j("#process").on('click mouseover', function() {
            $j("#processinfo").toggle();
            $j("#aboutinfo").hide();
        });
    });*/

$(document).ready(function(){
  var clicked=false;
    
  //start hidden
  $('#bloginfo').hide();
    
    //about click
    $('#blog').on('click', function() {
        clicked = !clicked;
        $('#blog').hide();
        $('#bloginfo').show();
    });
    
    //about hover
    $('#blog').click(
      function() {
          if (!clicked) {
             $('#bloginfo').hide();
             $('#bloginfo').show();
          }
      }
    ); 
});
