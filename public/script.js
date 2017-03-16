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

 $("a").click(function(event){ 
     $(this).parent().fadeOut(function(){
        $.get( $(this).attr("href"), function( data ) {
        });
     });

    
 });


})