jQuery(document).ready(function($){
    
    
    
    var menuIn = false;
    $rc = $(".round-thumb > a");
    $mL = $(".modalL");
    $mR = $(".modalR");
    
  
    $rc.click(function(){
        
        $mR.addClass("animR");
        $mL.addClass("animL");
        $('#wrapper').addClass("lightsDim");
    });
   $cross = $(".spanExitButton");
    $cross.click(function(){
         $mR.removeClass("animR");
        $mL.removeClass("animL");
        $('#wrapper').removeClass("lightsDim");
    });
  
   
});