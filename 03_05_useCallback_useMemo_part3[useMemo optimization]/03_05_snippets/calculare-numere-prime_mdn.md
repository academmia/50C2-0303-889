```js


function intensiveCalculation(votes) {
    console.log('Start calculation for votes: ', votes);
    let iterations = votes * 10;
    let multiplier = votes * 1000000000;
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = i * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
            // not prime
            isPrime = false;
            break;
        }
        } 
        if (isPrime) {
        primes.push(candidate);
        }
    }
    console.log('Ready calculation for votes: ', votes);
    return primes[iterations-1];
}

```