var CarLot = (function (CarLot) {

  CarLot.activateEvents = function () {

    var textInputEmt = document.getElementsByTagName("input");
    var cards = document.getElementsByTagName("card");
    for (var i = 0; i < cards.length; i++){
      // add event listener to card element for click
      cards[i].addEventListener("click", function(e1){
        targetEmt = this.childNodes[4];
        CarLot.setCard(this, "tomato");
        textInputEmt[0].disabled = false;
        textInputEmt[0].value = targetEmt.innerHTML;
        textInputEmt[0].focus();
        textInputEmt[0].addEventListener("keyup", inputText);
      });

      // add event listener to card element for mouseout, disable input when mouseout
      cards[i].addEventListener("mouseout", function(){
        textInputEmt[0].value = "";
        textInputEmt[0].disabled = true;
        textInputEmt[0].removeEventListener("keyup", inputText);
        CarLot.resetCard();
      });
    }
    
    //  function to synchronize input box with card element, disabled when enter is pressed
    function inputText(e2) {
      targetEmt.innerHTML = this.value;
      if(e2.keyCode === 13){        
        e2.preventDefault();
        textInputEmt[0].value = "";
        textInputEmt[0].disabled = true;
        textInputEmt[0].removeEventListener("keyup", inputText);
        CarLot.resetCard();
      }
    } // end inputText
  }; // end activateEvents
  return CarLot;

})(CarLot || {});

