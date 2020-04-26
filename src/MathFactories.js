export const mathFactory = (first, operator, second) => {
  switch (operator) {
    case "+":
      return first + second;
      break;
    case "-":
      return first - second;
      break;
    case "/":
      return first / second;
      break;
    case "x":
      return first * second;
      break;
    case "%":
      second = 100;
      return first / second;
      break;
  }
};

export const concat = (oldNumber, newNumber) => {
  if (oldNumber === null) {
    return parseInt(newNumber);
  }
  const result = oldNumber + "" + newNumber;
  return parseInt(result, 10);
};
