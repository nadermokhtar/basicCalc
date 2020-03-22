export const MathFac = (first, operator, second) => {
  switch (operator) {
    case operator === "+":
      return first + second;
    case operator === "-":
      return first - second;
    case operator === "/":
      return first / second;
    case operator === "x":
      return first * second;
    case operator === "%":
      second = 100;
      return first / second;
  }
};

export const Concat = (oldNumber, newNumber) => {
  if (oldNumber == 0) {
    return newNumber;
  }
  const result = oldNumber + "" + newNumber;
  return parseInt(result, 10);
};
