const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
//function to check if a given number is prime
function isPrime(n) {
  //since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;

  //Run a loop from 2 to square root of n.
  for (var i = 2; i * i <= n; i++) {
    // if the number is divisible by i, then n is not a prime number.
    if (n % i == 0) return false;
  }
  //otherwise, n is prime number.
  return true;
}
app.get("/getprimes", (req, res) => {
  const a = req.query.n;
  var y = a;
  const result = [];

  for (var i = 1; i <= y; i++) {
    //check if current number is prime
    if (isPrime(i)) {
      result.push(i);
    }
  }
  res.send(result);
});

app.listen(3000, () => {
  console.log("running");
});
