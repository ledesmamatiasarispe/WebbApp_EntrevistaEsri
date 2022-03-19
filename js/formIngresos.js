/*oculto el form de ingreso en el inicio*/ 
$( function() {
    $( "#form1" ).draggable().hide();
  } );


function showFormIngresos()
{
    $( "#form1" ).show("fold",100)

}