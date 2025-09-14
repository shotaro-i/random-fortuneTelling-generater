const messages = {
  fortune: [
    "Great Luck",
    "Moderate Luck",
    "Small Luck",
    "Slight Luck",
    "Bad Luck",
  ],
  weather: ["Sunny", "Cloudy", "Rainy", "Snowy"],
  color: ["Red", "Blue", "Green", "Yellow", "Purple"],
};

const generateRandomNumber = (num) => {
  //  Num is array's length
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
};

const fortunes = [];

for (let prop in messages) {
  const fortuneIdx = generateRandomNumber(messages[prop].length);
  switch (prop) {
    case "fortune":
      fortunes.push(`Your fortune is: ${messages[prop][fortuneIdx]}`);
      break;
    case "weather":
      fortunes.push(
        `Tomorrow's weather will be: ${messages[prop][fortuneIdx]}`
      );
      break;
    case "color":
      fortunes.push(`Your lucky color is: ${messages[prop][fortuneIdx]}`);
      break;
  }
}

const joinedFortunes = (fortunes) => {
  const joinedFortunes = fortunes.join("\n");
  console.log(joinedFortunes);
};

joinedFortunes(fortunes);

// Example Output:
