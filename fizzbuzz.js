const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        i % 3 === 0 && i % 5 === 0 
            ? console.log('fizzbuzz') 
            : i % 5 === 0 ? console.log('buzz') 
            : i % 3 === 0 ? console.log('fizz') 
            : console.log(i);
    };
};