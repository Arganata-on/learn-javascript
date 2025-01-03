function isPrime(number) {
  if (number % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
let number = 4;
console.log(isPrime(number));
