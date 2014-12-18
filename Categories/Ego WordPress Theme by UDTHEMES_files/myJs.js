jQuery(document).ready(function($){
    
    
    
    var menuIn = false;
    $rc = $(".round-thumb > a");
    $mL = $(".modalL");
    $mR = $(".modalR");
    
     $cross = $(".spanExitButton");
    $cross.addClass("hideMe");
    
    function showpanel() {     
  $cross.toggleClass("hideMe");
 }
    
    $rc.click(function(){
         setTimeout(showpanel,2500);
        $mR.addClass("animR");
        $mL.addClass("animL");
        $('#wrapper').addClass("lightsDim");
        
    });

    $cross.click(function(){
         showpanel();
         $mR.removeClass("animR");
        $mL.removeClass("animL");
        $('#wrapper').removeClass("lightsDim");
    });
  
   
});