/*Highlights the color selected by deselecting the previously selected color
*Displays the color selection text
*/
function selectColor(e){
  var previousSelection =   document.getElementsByClassName("select");
  previousSelection[0].classList.remove("select");
  
  var currentSelection = e.target;
  currentSelection.parentElement.classList.add("select");
  
  var selectedText = currentSelection.getAttribute("id");
  if(selectedText){
    document.getElementById("selectedText").innerHTML="You have selected color '"+selectedText+"'";
  }else{
    document.getElementById("selectedText").innerHTML="";
  }
    
}