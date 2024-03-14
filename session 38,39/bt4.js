const jokes = [
    "joke" +
      ":" +
      "All vampires keep their money in a special place—the blood bank.",
    "joke" +
      ":" +
      "What do you call someone who can’t stick to a diet? A desserter.",
    "joke" +
     ":" +
     "I only seem to get to sick on weekdays. I must have a weekend immune system",
     "joke" +
     ":" +
     "You can tell it's a dogwood tree from its bark",   
    "joke" +
     ":" +
     "What do you call a sheep that knows karate? A lamb chop.",
    "joke" +
     ":" +
     "What does a dad get in their stocking if they’ve been naughty? Char-coal.",
    "joke" +
     ":" +
     "Why did the scarecrow win an award? Because he was outstanding in his field",
     "joke" +
     ":" +
     "What do you call a cow with no legs? Ground beef.",
     "joke" +
     ":" +
     "What has ears but cannot hear? A cornfield!", 
    "joke" +
     ":" +
     "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner.",


     
  ];
  function newJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[randomIndex];
    document.body.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 75%)`;
  }