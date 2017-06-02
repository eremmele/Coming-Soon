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

$j(document).ready(function(){
  var clicked=false;
    
  //start hidden
  $j('#bloginfo').hide();
    
    //about click
    $j('#blog').on('click', function() {
        clicked = !clicked;
        $j('#blog').hide();
        $j('#bloginfo').show();
    });
    
    //about hover
    $j('#blog').click(
      function() {
          if (!clicked) {
             $j('#bloginfo').hide();
             $j('#bloginfo').show();
          }
      }
    ); 
});
