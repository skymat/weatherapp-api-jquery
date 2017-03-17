$("document").ready(function() {
  // DOM chargé 

$( function() {
    $( "#sortable" ).sortable({
        start: function(e, ui) {
        // creates a temporary attribute on the element with the old index
        $(this).attr('data-previndex', ui.item.index());
    },
        update: function(e, ui) {
        // gets the new and old index then removes the temporary attribute
        var newIndex = ui.item.index();
        var oldIndex = $(this).attr('data-previndex');
        $(this).removeAttr('data-previndex');

        $.post( "/sortList", { new_index : newIndex, old_index: oldIndex });
    }
    });
});



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