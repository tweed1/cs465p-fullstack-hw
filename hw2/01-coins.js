/** Exercise 01 - Coins **/

// Add your function here 
const calculateChange = function calculation(num) {
    if (num > 100) {
        return(`Error: the number is too large`)
    }

    let cents = num * 100

    const dollars = Math.floor(cents/100)
    let remainder = cents % 100
    cents = remainder

    const quarters = Math.floor(remainder/25)
    remainder = cents % 25
    cents = remainder

    const dimes = Math.floor(remainder/10)
    remainder = cents % 10
    cents = remainder

    const nickels = Math.floor(remainder/5)
    remainder = cents % 5

    const pennies = Math.floor(remainder)

    // referenced from LLM for assist in conditional return solution
    const grammarFormat = (count, singular, plural) =>
        count > 0 && `${count} ${count === 1 ? singular : plural}`;

    return [
        grammarFormat(dollars, 'dollar', 'dollars'),
        grammarFormat(quarters, 'quarter', 'quarters'),
        grammarFormat(dimes, 'dime', 'dimes'),
        grammarFormat(nickels, 'nickel', 'nickels'),
        grammarFormat(pennies, 'penny', 'pennies')
    ].filter(Boolean).join(', ')
}

// Sample test cases
console.log("\n", calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log("\n",calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log("\n",calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here 
console.log("\n",calculateChange(99.98));
// $99.98 ==> 99 dollars, 3 quarters, 2 dimes, 3 pennies
console.log("\n",calculateChange(0.01));
// $0.01 ==> 1 penny