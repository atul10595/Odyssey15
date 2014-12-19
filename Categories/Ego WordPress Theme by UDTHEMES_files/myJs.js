jQuery(document).ready(function($) {

    $rc = $(".round-thumb");
    $mL = $(".modalL");
    $mR = $(".modalR");
    $modalListOfRules = $(".orderedList");
    var eventName = 'verve';

    var menuIn = false;
    

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
    
    var battletroupe =  [
        "Rulesssssssssss",
        "toooooooooooools"
    ];

    $cross = $(".spanExitButton");
    $cross.addClass("hideMe");

    function exitModal() {
        showpanel();
        $('body').removeClass('noscroll');
        $mR.removeClass("animR");
        $mL.removeClass("animL");
        $('#wrapper').removeClass("lightsDim");
        $("#wrapper").unbind("click", exitModal);


    }
var imagePath ;
    var arrayOfRules ;

    function showpanel() {
        $cross.toggleClass("hideMe");
        

        //        $('body:not("modal")')
    }

    function exitOnclickAnywhere() {
        $("#wrapper").dblclick(exitModal);
    }
    $list = $mL.find("ol");
    
         function fillEverything(){
             var k =0;
            $('body').addClass('noscroll');
             console.log(++k);
            $(".bgRules").css("background","url('')");console.log(++k);
            $(".bgRulesForModalR").css("background","url('')");console.log(++k);
            $modalListOfRules.empty();console.log(++k);
            $list.append("<strong style='font-size:20px;font-weight:600;'><br>RULES</strong>");console.log(++k);
            $mR.css("background", "none");console.log(++k);
            $(".bgRules").css({
            "background": "url('" + imagePath + "') no-repeat"

            });console.log(++k);
            $(".bgRulesForModalR").css({
            "background": "url('" + imagePath + "') no-repeat",
            "background-size": "80% 60%"


            });console.log(++k);
           

            for (i = 0; i < arrayOfRules.length;) {
                $list.append("<li style='color:rgba(255,255,255,1);'>" + (i + 1) + ".&nbsp;&nbsp;" + arrayOfRules[i] + "</li>");
                i++;
            }
            $(".nano").nanoScroller();
            
             setTimeout(showpanel, 1900);
        setTimeout(exitOnclickAnywhere, 2000);
        $mR.addClass("animR");
        $mL.addClass("animL");
        $('#wrapper').addClass("lightsDim");
        }
    
    $rc.click(function() {
        eventName = $(this).attr('id');
        switch (eventName) { 
    case 'verve': 
        imagePath = "./slide-122.jpg";
        arrayOfRules = rulesID523;
        break;
    case 'battletroupe': 
        imagePath = "./2.jpg";
        arrayOfRules = battletroupe;
        break;
    case 'mootools': 
        alert('mootools Wins!');
        break;      
    case 'dojo': 
        alert('dojo Wins!');
        break;
  
}
        fillEverything();
    });

    $cross.click(exitModal);



    
    


});