jQuery(document).ready(function($){
    
    
    
    var menuIn = false;
    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    
    var rulesID523 = ["ONE","Rule2 Rule2"];
    
     $cross = $(".spanExitButton");
    $cross.addClass("hideMe");
    
    function showpanel() {     
  $cross.toggleClass("hideMe");
 }
    
    $rc.click(function(){
        
        if(this.id==535){
            $list = $mL.find("ol");
            //alert(rulesID523.length);
            for(i=0;i<rulesID523.length;)
            {
                $list.find("li:nth-of-type("+(i+1)+")").text(rulesID523[i]);
                i++;
            }
        }
        
         setTimeout(showpanel,2000);
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