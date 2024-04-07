// Code your solutions in this file
function wrapGift(gift) {
    console.log(`Wrapped ${gift} and added a bow!`);
  }
  
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      wrapGift(gifts[i]);
    }
  }
  
  wrapGifts(gifts);
  
  function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouCards = writeCards(names, eventName);
  console.log(thankYouCards);
  
  // Function to count down from a given number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  