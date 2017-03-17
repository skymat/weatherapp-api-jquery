$("document").ready(function() {
  // DOM chargé 

  $("#city").keyup(function(event){ 

        if($(this).val() != undefined)
        {
            if ($(this).val().length > 2)
            {
                $("#btValidCity").prop('disabled', false);
                
                console.log($(this).val().length);
            }
            else
                $("#btValidCity").prop('disabled', true);
        }
    
});

// En utilisant ajax
/*
 $("a").click(function(event){ 
     $(this).parent().fadeOut(function(){
        $.get( $(this).attr("href"), function( data ) {
        });
     });  
 });
 */


var deleteCity = false;
$("a").click(function(event){ 
        if (deleteCity == false)
        {
            event.preventDefault();
            deleteCity = true;
            $(this).parent().fadeOut(function(){
                $(this).find(".glyphicon-remove-circle").trigger("click");
            }); 
        } 
 });



})