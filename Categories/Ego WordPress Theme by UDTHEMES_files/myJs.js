jQuery(document).ready(function($){
    
    
    
    var menuIn = false;
    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    
    var rulesID523 = [
        "ONE",
        "Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 Rule2 ONE aplhja beta amma",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3",
        "Rule2 Rule2",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3",
        "ONE",
        "Rule2 Rule2",
        "Rule 3"
    ];
    
     $cross = $(".spanExitButton");
    $cross.addClass("hideMe");
    
    function exitModal(){
         showpanel();
         $mR.removeClass("animR");
        $mL.removeClass("animL");
        $('#wrapper').removeClass("lightsDim");
        $("#wrapper").unbind("click",exitModal);
        $modalListOfRules.empty();
        
    }
    
    
    function showpanel() {     
  $cross.toggleClass("hideMe");
//        $('body:not("modal")')
 }
    function exitOnclickAnywhere(){
    $("#wrapper").click(exitModal);
    }
    
    $rc.click(function(){
        
        
        
        if(this.id==535){
            $list = $mL.find("ol");
            $(".bgRules").css({
                "background": "url('"+"./slide-122.jpg"+"') no-repeat"
              
                });
            
    
            //alert(rulesID523.length);
            for(i=0;i<rulesID523.length;)
            {
                $list.append("<li style='color:rgba(255,255,255,1);'>"+(i+1)+".&nbsp;&nbsp;"+rulesID523[i]+"</li>");
                i++;
            }
            $(".nano").nanoScroller();
        }
        
         setTimeout(showpanel,1900);
        setTimeout(exitOnclickAnywhere,2000);
        $mR.addClass("animR");
        $mL.addClass("animL");
        $('#wrapper').addClass("lightsDim");
        
    });

    $cross.click(exitModal);
  
   
    
    
});