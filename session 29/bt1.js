function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function kiemTraChanLe(number) {
    if (number % 2 === 0) {
      return"Số " + number + " là số chẵn";
    } else {
      return"Số " + number + " là số lẻ";
    }
  }
  
  var number1 = randomNumber(1, 100);
  console.log(kiemTraChanLe(number1));
  var number2 = randomNumber(1, 100);
  console.log(kiemTraChanLe(number2));
  var number3 = randomNumber(1, 100);
  console.log(kiemTraChanLe(number3));
  
