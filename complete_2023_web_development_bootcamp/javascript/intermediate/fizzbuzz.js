function fizzbuzz() {

    var result = [];

    for (let index = 1; index < 101; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            result.push("FizzBuzz");
        } else if (index % 3 == 0) {
            result.push("Fizz");
        } else if (index % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(index);
        }
    }

    console.log(result);

}

fizzbuzz();
