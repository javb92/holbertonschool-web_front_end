function countPrimeNumbers() {
	let counter=0;
    for (let i = 2; i <= 20; i++) { 
        // Skip 0 and 1 as they are 
        // niether prime nor composite 
        if (i === 1 || i === 0) 
            pass; 

        // flag variable to tell 
        // if i is prime or not 
        flag = 1; 

        for (let j = 2; j <= i / 2; ++j) { 
            if (i % j === 0) { 
                flag = 0; 
                break; 
            } 
        } 

        // flag = 1 means i is prime 
        // and flag = 0 means i is not prime 
        if (flag === 1) 
            counter++; 
    }
    return counter;
}
var t0 = performance.now();
countPrimeNumbers();
var t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");