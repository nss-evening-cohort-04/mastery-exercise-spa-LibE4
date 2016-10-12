var CarLot = (function (CarLot) {

  // set back all cards' border and background color
  CarLot.resetCard = function () {
    var cards = document.getElementsByTagName("card");
    for (var i = 0; i < cards.length; i++){
      cards[i].style.border = "1px solid black";
      cards[i].style.background = "transparent";      
    }
  }; // end resetCard

  // set up selected card's border and background color
  CarLot.setCard = function (cardClickedOn, bgColor) {
        cardClickedOn.style.border = "3px solid black";
        cardClickedOn.style.background = bgColor;
  }; // end setCard

  return CarLot;

})(CarLot || {});